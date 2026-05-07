# 🌱 AgroTrack

AgroTrack is an IoT-based smart agriculture monitoring and automated irrigation system designed to monitor environmental conditions in real time and automate irrigation management securely.

The system integrates IoT sensors, a responsive dashboard, backend APIs, MongoDB storage, and cybersecurity protection mechanisms for secure smart farming operations.

---

# 🚀 Features

- Real-time sensor monitoring
- Automated irrigation monitoring
- Responsive dashboard UI
- MongoDB database integration
- Live sensor logs and analytics
- Dynamic alerts system
- JWT-based authentication
- Protected backend APIs
- Mobile-friendly interface
- Security attack detection and prevention

---

# 🔐 Security Features Implemented

AgroTrack includes protection against multiple IoT and web security threats:

| Security Threat | Protection Mechanism |
|---|---|
| Unauthorized Access | JWT Authentication |
| Denial of Service (DoS) | Rate Limiting Middleware |
| Replay Attack | Timestamp Validation |
| Sensor Data Spoofing | Sensor Threshold Validation |
| Man-in-the-Middle (MITM) | Secure Request Validation + Helmet.js |

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

```text
AGROTRACK/
│
├── frontend/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md


