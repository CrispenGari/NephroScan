### Using cURL

The following commands can be used to test the API using `cURL`.

```shell
# normal
cURL -X POST -F image=@normal.jpg http://127.0.0.1:8000/api/v1/stone/predict/mobilenetv3

# stone
cURL -X POST -F image=@stone.jpg http://127.0.0.1:8000/api/v1/stone/predict/mobilenetv3
```

### Expected Response

The following is the API expected response.

```json
{
  "time": 0.043650150299072266,
  "ok": true,
  "status": "ok",
  "prediction": { "label": 0, "class_label": "normal", "probability": 1.0 },
  "model": "mobilenetv3"
}
```

### Testing the API.

To run some unit test on the API you run the following command:

```shell
pytest
```
