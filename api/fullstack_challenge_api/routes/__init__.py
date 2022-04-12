from fastapi import APIRouter

from . import companies, deals, init

backend_router = APIRouter()
backend_router.include_router(init.router, tags=["init"])
backend_router.include_router(companies.router, tags=["companies"])
backend_router.include_router(deals.router, tags=["deals"])
