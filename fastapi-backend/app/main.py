# Main entry point of the FastAPI application.
# It creates the FastAPI app instance and applies core configurations like CORS and middleware.

from fastapi import FastAPI
from app.routes import router as api_router
from app.middleware.cors import add_cors_middleware

app = FastAPI()
add_cors_middleware(app)

# Include all routes via centralized router
app.include_router(api_router, prefix="/api")
