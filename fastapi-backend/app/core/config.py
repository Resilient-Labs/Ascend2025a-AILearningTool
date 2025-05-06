from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    CORS_ORIGINS: List[str] = ["http://localhost:5173"]
    PROJECT_NAME: str = "FastAPI Template"

    class Config:
        env_file = ".env"

settings = Settings()
