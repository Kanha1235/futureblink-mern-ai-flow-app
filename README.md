# FutureBlink MERN AI Flow App&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [![View it live](https://img.shields.io/badge/Live-Demo-blue)](https://pocket-notes-phi-six.vercel.app/)

I built this project for the **FutureBlink MERN task**.
It lets a user type a prompt in a React Flow input node, run the flow to get an AI response through a secure Node/Express backend, and save the prompt-response pair in MongoDB.  

## Project Structure

```text
futureblink/
├── client/
└── server/
```

## Tech Stack

- Frontend: React + Vite + React Flow
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- AI: OpenRouter API

## Run Locally

### 1) Backend

```bash
cd server
npm install
touch .env
```

Create `server/.env` with:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
DB_NAME=futureblink_ai_flow
CLIENT_URL=http://localhost:5173
OPENROUTER_API_KEY=your_openrouter_api_key
OPENROUTER_MODEL=google/gemini-2.0-flash-lite-preview-02-05:free
```
```bash
npm run dev
```

### 2) Frontend

```bash
cd client
npm install
touch .env
```
Create `client/.env` with:

```env
VITE_API_URL=http://localhost:3000/api/v1
```
```env
npm run dev
```


## API Routes

### Health
- `GET /api/v1/health`

### AI Flow
- `POST /api/v1/flows/run`
- `POST /api/v1/flows/save`
- `GET /api/v1/flows/history`
`
