# How to Run the Backend (FastAPI)

- A modular and production-friendly FastAPI backend.

This is the **backend** of the project.

> ⚡ The frontend is located in the `/frontend` folder. See `/frontend/README.md` for setup instructions.

## 1. Clone the Repository

First, clone the entire project:

```console
git clone https://github.com/Resilient-Labs/Ascend2025a-AILearningTool.git
```

Then navigate to the backend folder:

```console
cd Ascend2025a-AILearningTool/frontend
```

## 2. Set Up a Virtual Environment

### For macOS/Linux

```console
python3 -m venv venv
source venv/bin/activate
```

### For Windows

```console
python -m venv venv
venv\Scripts\activate
```

## 3. Install Dependencies

```console
pip install -r requirements.txt
```

## 4. Configure Environment Variables

- Create a .env file at the root of the project with the following content:

```console
PROJECT_NAME="FastAPI Backend"
CORS_ORIGINS=["http://localhost:5173"] //'localhost:5173' differ, depending on how your frontend is configured
```

## 5. Run the Application

Using the Startup Script

```console
./uvicorn_start.sh
```

## 6. Access API Documentation

- https://devdocs.io/fastapi/

## Notes:

- Always activate your virtual environment before running the server.
- Make sure your .env file is not pushed to GitHub.
