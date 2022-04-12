from typing import Optional
from urllib.error import HTTPError

from fastapi import APIRouter, Depends, HTTPException, Query
from fullstack_challenge_api.routes.init import Companies
from fullstack_challenge_api.utils.db import get_db
from sqlalchemy import desc
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/companies")
async def get_companies(db: Session = Depends(get_db)):
    companies = db.query(Companies).all()
    return companies


@router.patch(
    "/companies/{id}",
    response_model=Companies,
)
async def patch_company(
    id: int,
    name: Optional[str] = Query(None),
    country: Optional[str] = Query(None),
    founding_date: Optional[str] = Query(None),
    description: Optional[str] = Query(None),
    db: Session = Depends(get_db),
) -> Companies:
    company = db.query(Companies).filter(Companies.id == id).first()
    if not company:
        raise HTTPException(404, "Couldn't find the company with this ID!")
    if name:
        company.name = name
    if country:
        company.country = country
    if founding_date:
        company.founding_date = founding_date
    if description:
        company.description = description

    db.commit()
    return company
