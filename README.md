# Campus Lost & Found System

A full-stack web application for managing lost and found items on campus, built with a **Spring Boot** backend and a **React + Vite** frontend.

---

## Project Structure

```text
CampusLostAndFound/
├── backend/          # Spring Boot 3 Java Backend (Port 8080)
│   ├── src/
│   ├── Dockerfile
│   ├── pom.xml
│   └── README.md
├── frontend/         # React + Vite Frontend (Port 80 / 5173)
│   ├── src/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   └── README.md
└── docker-compose.yml # Docker Compose configuration
```

---

## Docker Quick Start (Recommended)

You can run both backend and frontend together using Docker Compose:

```bash
docker compose up --build
```

Access the applications:
- **Frontend App**: [http://localhost:80](http://localhost:80) or [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:8080/api/hello](http://localhost:8080/api/hello)

### Build Docker Images Individually

#### Backend Docker Image:
```bash
docker build -t campus-lost-found-backend:latest ./backend
docker run -d -p 8080:8080 --name campus-backend campus-lost-found-backend:latest
```

#### Frontend Docker Image:
```bash
docker build -t campus-lost-found-frontend:latest ./frontend
docker run -d -p 80:80 --name campus-frontend campus-lost-found-frontend:latest
```

---

## Local Development (Without Docker)

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

### Docker Commands
- **Start All Services**: `docker compose up --build`
- **Stop All Services**: `docker compose down`
- **Build Backend Image**: `docker build -t campus-lost-found-backend:latest ./backend`
- **Build Frontend Image**: `docker build -t campus-lost-found-frontend:latest ./frontend`

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
