from fastapi import APIRouter
from app.controllers import example  # Import your route modules here

# Create a top-level router
router = APIRouter()

# Include routers from each controller
router.include_router(example.router, prefix="/example", tags=["Example"])

# Add more controllers as your app grows, examples below
# router.include_router(users.router, prefix="/users", tags=["Users"])
# router.include_router(auth.router, prefix="/auth", tags=["Auth"])
