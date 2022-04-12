from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from fullstack_challenge_api.routes.init import Companies, Deals
from fullstack_challenge_api.utils.db import get_db
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/deals")
async def get_deals(db: Session = Depends(get_db)):
    deals = db.query(Deals).all()
    return deals


@router.patch(
    "/deals/{id}",
    response_model=Deals,
)
async def patch_deal(
    id: int,
    date: Optional[str] = Query(None),
    funding_amount: Optional[str] = Query(None),
    funding_round: Optional[str] = Query(None),
    company_id: Optional[str] = Query(None),
    db: Session = Depends(get_db),
) -> Companies:
    deal = db.query(Deals).filter(Deals.id == id).first()
    if not deal:
        raise HTTPException(404, "Couldn't find the deal with this ID!")
    if date:
        deal.date = date
    if funding_amount:
        deal.funding_amount = funding_amount
    if funding_round:
        deal.funding_round = funding_round
    if company_id:
        deal.company_id = company_id

    db.commit()
    return deal
