from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from torchvision import models
import warnings
from routers.predictStone import predictStoneRouter

warnings.filterwarnings("ignore")


def download_add_cache_models():
    print(" *  DOWNLOADING AND CACHING MODELS")
    models.resnet50(weights=False)
    models.mobilenet_v3_large(weights=False)
    models.densenet201(weights=False)
    print(" *  DONNE DOWNLOADING AND CACHING MODELS")


@asynccontextmanager
async def lifespan(app: FastAPI):
    download_add_cache_models()
    yield


app = FastAPI(
    title="NephroScan API",
    description="API for detecting kidney stones.",
    version="0.0.1",
    lifespan=lifespan,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(predictStoneRouter)


@app.get("/")
def root():
    return JSONResponse(
        {
            "title": "NephroScan API",
            "description": "API for detecting kidney stones.",
            "version": "0.0.1",
        },
        status_code=200,
    )
