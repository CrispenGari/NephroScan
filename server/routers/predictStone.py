from fastapi import APIRouter, File
from fastapi.responses import JSONResponse
from typing import Annotated
from models import (
    densenet201,
    mobilenetv3,
    resnet50,
    predict_stone,
    device,
)
import time

allowed_models = {
    "resnet50": {'model':resnet50, 'conv': 'layer3.2'},
    "mobilenetv3": {'model': mobilenetv3, 'conv': 'features.16'},
    "densenet201": {'model': densenet201, 'conv': None},
}

predictStoneRouter = APIRouter(prefix="/api/v1/stone")


@predictStoneRouter.post("/predict/{model_name}")
def predict_stone_(model_name: str, image: Annotated[bytes, File()]):
    start = time.time()
    if model_name.strip().lower() not in allowed_models.keys():
        return JSONResponse(
            {
                "time": time.time() - start,
                "ok": False,
                "field": "model_name",
                "status": "error",
                "message": f"The model name specified is not found from the allowed models ({', '.join(allowed_models)}).",
            },
            status_code=200,
        )
    try:
        prediction = predict_stone(allowed_models[model_name]['model'], image, device=device)
        return JSONResponse(
            {
                "time": time.time() - start,
                "ok": True,
                "status": "ok",
                "prediction": prediction,
                "model": model_name.strip().lower(),
            },
            status_code=200,
        )
    except Exception:
        JSONResponse(
            {
                "time": time.time() - start,
                "ok": False,
                "field": "server",
                "status": "error",
                "message": "Internal Server Error.",
            },
            status_code=500,
        )
