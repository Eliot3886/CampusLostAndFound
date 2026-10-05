# Campus Lost & Found System

A full-stack web application for managing lost and found items on campus, built with a **Spring Boot** backend and a **React + Vite** frontend.

---

## Project Structure

```text
CampusLostAndFound/
├── backend/          # Spring Boot 3 Java Backend (Port 8080)
│   ├── src/
│   ├── pom.xml
│   └── README.md
└── frontend/         # React + Vite Frontend (Port 5173)
    ├── src/
    ├── package.json
    └── README.md
```

---

## Quick Start Guide

### Step 1: Run the Backend

Open a terminal window and navigate to the `backend` directory:

```bash
cd backend
```

#### Windows:
```powershell
.\mvnw.cmd spring-boot:run
```

#### macOS / Linux:
```bash
./mvnw spring-boot:run
```

The backend server will start at `http://localhost:8080`.

---

### Step 2: Run the Frontend

Open a second terminal window and navigate to the `frontend` directory:

```bash
cd frontend
npm install
npm run dev
```

The frontend application will start at `http://localhost:5173`.

---

## All Project Commands Reference

### Backend (`/backend`)
- **Start Backend**: `.\mvnw.cmd spring-boot:run` (Windows) or `./mvnw spring-boot:run` (Mac/Linux)
- **Run Unit Tests**: `.\mvnw.cmd test`
- **Build JAR**: `.\mvnw.cmd clean package`

### Frontend (`/frontend`)
- **Install Dependencies**: `npm install`
- **Start Dev Server**: `npm run dev`
- **Build Production Bundle**: `npm run build`
- **Preview Production Build**: `npm run preview`
- **Lint Code**: `npm run lint`

---

## Technical Documentation
- For detailed backend configuration, API routes, and troubleshooting, see [`backend/README.md`](file:///c:/me/CampusLostAndFound/backend/README.md).
- For detailed frontend setup and available scripts, see [`frontend/README.md`](file:///c:/me/CampusLostAndFound/frontend/README.md).
