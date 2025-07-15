from fastapi import FastAPI
from api.routes import router

app = FastAPI()

from api.config import apply_cors
apply_cors(app)


app.include_router(router)

# Run with: uvicorn api.main:app --reload
