from fastapi import APIRouter, Request
from api.utils import prepare_input
from models.models_loader import predict
from pydantic import BaseModel

router = APIRouter()

class CaliHouseFeatures(BaseModel):
    longitude: float
    latitude: float
    housing_median_age: float
    total_rooms: float
    total_bedrooms: float
    population: float
    households: float
    median_income: float
    ocean_proximity_INLAND: int
    ocean_proximity_ISLAND: int
    ocean_proximity_NEAR_BAY: int
    ocean_proximity_NEAR_OCEAN: int

# @router.post("/predict_house_price")
# async def get_prediction(features: CaliHouseFeatures):
#     data_vector = prepare_input(features.dict())
#     price = predict(data_vector)
#     return { "estimated_price": round(price, 2) }


@router.post("/predict_house_price")
async def get_prediction(request: Request):
    try:
        payload = await request.json()
        data_vector = prepare_input(payload)
        price = predict(data_vector)
        return { "estimated_price": round(price, 2) }
    except Exception as e:
        return {"error": str(e)}
