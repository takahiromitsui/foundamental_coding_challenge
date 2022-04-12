import json
import os
from datetime import datetime

import sqlalchemy
from fastapi import APIRouter, Depends
from fullstack_challenge_api.utils.db import get_db
from sqlalchemy.orm import Session
from sqlmodel import Field, SQLModel

router = APIRouter()


class Companies(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    name: str
    country: str
    founding_date: datetime
    description: str


class Deals(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    date: datetime
    funding_amount: float
    funding_round: str
    company_id: int


def init_company_db(db: Session = Depends(get_db)):
    f = open("fullstack_challenge_api/routes/challenge_companies.json")
    company_data = json.load(f)

    companies = [
        Companies(
            id=int(company_id) + 1,
            name=company_data[company_id]["name"],
            country=company_data[company_id]["country"],
            founding_date=company_data[company_id]["founding_date"],
            description=company_data[company_id]["description"],
        )
        for company_id in company_data
    ]
    for company in companies:
        db.add(company)
    db.commit()


def init_deals_db(db: Session = Depends(get_db)):
    f = open("fullstack_challenge_api/routes/challenge_deals.json")
    deal_data = json.load(f)

    deals = [
        Deals(
            id=int(deal_id) + 1,
            date=datetime.fromtimestamp(deal_data[deal_id]["date"] / 1000.0),
            funding_amount=deal_data[deal_id]["funding_amount"],
            funding_round=deal_data[deal_id]["funding_round"],
            company_id=deal_data[deal_id]["company_id"],
        )
        for deal_id in deal_data
    ]
    for deal in deals:
        db.add(deal)
    db.commit()


@router.get("/init_db")
async def init_db(db: Session = Depends(get_db)):
    db.execute(sqlalchemy.schema.CreateSchema("app"))
    db.execute(sqlalchemy.text("USE app;"))

    create_companies = sqlalchemy.text(
        """
    create table companies
    (
    id int auto_increment primary key,
    name          char(255) null,
    country       char(255) null,
    founding_date datetime  null,
    description   text      null,
    constraint companies_id_uindex
    unique (id)
    );
    """
    )

    create_deals = sqlalchemy.text(
        """
    create table deals
    (
    id int auto_increment primary key,
    date           datetime  null,
    funding_amount float     null,
    funding_round  char(255) null,
    company_id     int       null,
    constraint deals_id_uindex
    unique (id)
    );
    """
    )

    db.execute(create_companies)
    db.execute(create_deals)
    init_company_db(db)
    init_deals_db(db)
