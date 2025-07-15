# api/config.py

from fastapi.middleware.cors import CORSMiddleware

def apply_cors(app):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],       # You can restrict this for security
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
