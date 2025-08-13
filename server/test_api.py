from fastapi.testclient import TestClient
from app import app

client = TestClient(app)


class TestApI:
    def test_root(self):
        res = client.get("/")
        assert res.status_code == 200
        assert res.json() == {
            "title": "NephroScan API",
            "description": "API for detecting kidney stones.",
            "version": "0.0.1",
        }

    def test_prediction_with_error_1(self):
        res = client.post("/api/v1/stone/predict/unknown")
        assert res.status_code == 422

    def test_prediction_with_error_2(self):
        files = {"image": ("images/normal.jpg", open("images/normal.jpg", "rb"))}
        res = client.post("/api/v1/stone/predict/unknown", files=files)
        data = res.json()

        assert res.status_code == 200
        assert data["ok"] is False
        assert data["field"] == "model_name"
        assert data["status"] == "error"
        assert (
            data["message"]
            == "The model name specified is not found from the allowed models (resnet50, mobilenetv3, densenet201)."
        )

    def test_normal_prediction_resnet50(self):
        files = {"image": ("images/normal.jpg", open("images/normal.jpg", "rb"))}
        res = client.post("/api/v1/stone/predict/resnet50", files=files)
        data = res.json()

        assert res.status_code == 200
        assert data["ok"] is True
        assert data["status"] == "ok"
        assert data["model"] == "resnet50"
        assert data["prediction"]["label"] == 0
        assert data["prediction"]["class_label"] == "normal"

    def test_normal_prediction_mobilenetv3(self):
        files = {"image": ("images/normal.jpg", open("images/normal.jpg", "rb"))}
        res = client.post("/api/v1/stone/predict/mobilenetv3", files=files)
        data = res.json()

        assert res.status_code == 200
        assert data["ok"] is True
        assert data["status"] == "ok"
        assert data["model"] == "mobilenetv3"
        assert data["prediction"]["class_label"] == "normal"
        assert data["prediction"]["label"] == 0

    def test_normal_prediction_densenet201(self):
        files = {"image": ("images/normal.jpg", open("images/normal.jpg", "rb"))}
        res = client.post("/api/v1/stone/predict/densenet201", files=files)
        data = res.json()

        assert res.status_code == 200
        assert data["ok"] is True
        assert data["status"] == "ok"
        assert data["model"] == "densenet201"
        assert data["prediction"]["class_label"] == "normal"
        assert data["prediction"]["label"] == 0

    def test_stone_prediction_resnet50(self):
        files = {"image": ("images/stone.jpg", open("images/stone.jpg", "rb"))}
        res = client.post("/api/v1/stone/predict/resnet50", files=files)
        data = res.json()

        assert res.status_code == 200
        assert data["ok"] is True
        assert data["status"] == "ok"
        assert data["model"] == "resnet50"
        assert data["prediction"]["label"] == 1
        assert data["prediction"]["class_label"] == "stone"

    def test_stone_prediction_mobilenetv3(self):
        files = {"image": ("images/stone.jpg", open("images/stone.jpg", "rb"))}
        res = client.post("/api/v1/stone/predict/mobilenetv3", files=files)
        data = res.json()

        assert res.status_code == 200
        assert data["ok"] is True
        assert data["status"] == "ok"
        assert data["model"] == "mobilenetv3"
        assert data["prediction"]["label"] == 1
        assert data["prediction"]["class_label"] == "stone"

    def test_stone_prediction_densenet201(self):
        files = {"image": ("images/stone.jpg", open("images/stone.jpg", "rb"))}
        res = client.post("/api/v1/stone/predict/densenet201", files=files)
        data = res.json()

        assert res.status_code == 200
        assert data["ok"] is True
        assert data["status"] == "ok"
        assert data["model"] == "densenet201"
        assert data["prediction"]["label"] == 1
        assert data["prediction"]["class_label"] == "stone"
