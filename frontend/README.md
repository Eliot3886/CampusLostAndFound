# Campus Lost & Found - Frontend

This is the React + Vite frontend application for the Campus Lost & Found system.

## Prerequisites

- **Node.js**: Node.js v18.0.0 or higher
- **npm**: npm v9.0.0 or higher (comes bundled with Node.js)

---

## How to Run the Frontend

### 1. Install Dependencies

Open a terminal in the `frontend` directory and run:

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Once started, Vite will launch the development server at:
👉 `http://localhost:5173`

---

## Available Commands

| Action | Command | Description |
| :--- | :--- | :--- |
| **Install Dependencies** | `npm install` | Installs all required packages |
| **Development Server** | `npm run dev` | Starts Vite dev server with hot reload |
| **Build for Production** | `npm run build` | Compiles optimized static assets to `dist/` |
| **Preview Production Build** | `npm run preview` | Serves the production build locally |
| **Run Linter** | `npm run lint` | Runs oxlint code quality checks |

---

## Backend Connection

The frontend connects to the Spring Boot backend API running at:
`http://localhost:8080/api/hello`

Make sure the backend server is running on port `8080` before testing frontend backend integration.
