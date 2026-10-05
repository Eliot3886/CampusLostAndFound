# Campus Lost & Found - Backend

This is the Spring Boot backend application for the Campus Lost & Found system.

## Prerequisites

- **Java Development Kit (JDK)**: Java 17 or higher
- **Maven**: (Optional if using the included Maven Wrapper `mvnw`/`mvnw.cmd`)

---

## How to Run the Backend

### 1. Run using Maven Wrapper (Recommended)

#### Windows (PowerShell / Command Prompt)
```powershell
.\mvnw.cmd spring-boot:run
```

#### macOS / Linux
```bash
./mvnw spring-boot:run
```

### 2. Run using installed Maven
```bash
mvn spring-boot:run
```

Once running, the backend server will start at:
👉 `http://localhost:8080`

---

## Available Commands

| Action | Windows Command | macOS / Linux Command |
| :--- | :--- | :--- |
| **Start Server** | `.\mvnw.cmd spring-boot:run` | `./mvnw spring-boot:run` |
| **Run Tests** | `.\mvnw.cmd test` | `./mvnw test` |
| **Clean & Package JAR** | `.\mvnw.cmd clean package` | `./mvnw clean package` |
| **Compile Code** | `.\mvnw.cmd compile` | `./mvnw compile` |

---

## API Endpoints

| Method | Endpoint | Description | Sample Output |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/hello` | Backend health check & greeting | `Campus Lost & Found API is running!` |

---

## Troubleshooting

### Error: `Port 8080 was already in use`

If another process or a previously stopped server instance is occupying port `8080`:

#### Windows PowerShell:
```powershell
# 1. Find the PID using port 8080
Get-NetTCPConnection -LocalPort 8080 | Select-Object LocalAddress, LocalPort, OwningProcess, State

# 2. Terminate the process (replace <PID> with the actual process ID)
Stop-Process -Id <PID> -Force
```

#### macOS / Linux:
```bash
# Find and terminate process on port 8080
lsof -ti:8080 | xargs kill -9
```
