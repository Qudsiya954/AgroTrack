# 🌱 AgroTrack

AgroTrack is an IoT-based smart plant monitoring and automated irrigation system designed to monitor environmental conditions in real time and automate water pump control.

---

# 🚀 Features

- Real-time sensor monitoring
- Automated water pump control
- Responsive dashboard UI
- MongoDB data storage
- Backend API integration
- Dynamic sensor updates
- Live logs and pump status monitoring
- Mobile-friendly interface

---

# 🛠 Tech Stack

## Frontend
- HTML
- CSS
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MongoDB

## Hardware
- ESP32
- Soil Moisture Sensor
- DHT11 Sensor
- LDR Sensor
- Relay Module
- Water Pump

---

# 📁 Project Structure

```bash
AGROTRACK/
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── AgroTrack.jpeg
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
```

---

# ⚠️ Important

Do NOT upload or share:

```bash
backend/node_modules
```

If `node_modules` is missing, install dependencies using:

```bash
npm install
```

inside the backend folder.

---

# 💻 Required Software

Install the following software before running the project:

1. Node.js  
   https://nodejs.org

2. MongoDB Community Server  
   https://www.mongodb.com/try/download/community

3. MongoDB Compass  
   https://www.mongodb.com/products/tools/compass

4. Visual Studio Code  
   https://code.visualstudio.com

5. Postman  
   https://www.postman.com/downloads/

---

# ⚙️ Backend Setup

## 1. Open terminal inside backend folder

```bash
cd backend
```

## 2. Install dependencies

```bash
npm install
```

## 3. Start backend server

```bash
npm run dev
```

### Expected Output

```bash
MongoDB Connected
Server running on port 5000
```

---

# 🗄 MongoDB Connection

MongoDB should be running locally.

### Connection URI

```bash
mongodb://127.0.0.1:27017
```

### Database Name

```bash
agrotrack
```

---

# 🌐 Frontend Setup

## 1. Open frontend folder in VS Code

## 2. Install Live Server Extension

## 3. Right-click `index.html`

## 4. Click

```bash
Open with Live Server
```

---

# 🔌 Backend API

## Base URL

```bash
http://localhost:5000
```

---

## Available APIs

### 1. Add Sensor Data

```http
POST /api/sensors/add
```

### 2. Latest Sensor Data

```http
GET /api/sensors/latest
```

### 3. Sensor Logs

```http
GET /api/sensors/logs
```

---

# 📬 Postman Test Data

## POST Request

```http
http://localhost:5000/api/sensors/add
```

## JSON Body

```json
{
  "temperature": 29,
  "humidity": 68,
  "soilMoisture": 35,
  "lightIntensity": 270,
  "pumpStatus": "ON"
}
```

---

# ✅ Current Features Implemented

- Responsive dashboard
- Backend integration
- MongoDB integration
- Dynamic sensor updates
- Dynamic recent logs
- Pump status monitoring
- Backend status monitoring
- Mobile-friendly UI

---

# 🔮 Next Implementation

- ESP32 Wi-Fi integration
- Live hardware sensor data
- Relay-controlled water pump automation
- Pump timeout protection

---

# 🔢 Default Ports

| Service | Port |
|----------|------|
| Frontend | 5500 |
| Backend | 5000 |
| MongoDB | 27017 |

---

# 👨‍💻 Team Setup Instructions

After cloning the repository:

```bash
git clone <repository-url>
```

Install backend dependencies:

```bash
cd backend
npm install
```

Start backend server:

```bash
npm run dev
```

Run frontend using Live Server in VS Code.

---

# 📌 Notes

- Ensure MongoDB service is running before starting backend.
- Backend runs on port `5000`.
- Frontend runs on Live Server port `5500`.
- Use Postman to test backend APIs.

---

# 🌱 AgroTrack Workflow

```text
ESP32 Sensors
      ↓
Backend API
      ↓
MongoDB Database
      ↓
Frontend Dashboard
```
