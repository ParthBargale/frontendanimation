from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import time

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/layers")
def get_layers():
    # Adding a small delay to simulate network latency for the animation
    time.sleep(0.5)
    return {
        "title": "Making JavaScript developers more productive than ever before.",
        "layers": [
            {"id": "oxc", "label": "Oxc", "icon": "OxcIcon", "description": "language toolchain"},
            {"id": "vite_base", "label": "VITE", "icon": "ViteIcon", "description": "base layer"},
            {"id": "vite_plus", "label": "VITE+", "icon": "ViteIcon", "description": "enhanced tools"},
            {"id": "vitest", "label": "VITEST", "icon": "VitestIcon", "description": "testing framework"},
            {"id": "rolldown", "label": "ROLLDOWN", "icon": "RolldownIcon", "description": "bundler"}
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
