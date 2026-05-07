AGROTRACK SETUP GUIDE
________________


PROJECT OVERVIEW
AgroTrack is an IoT-based smart plant monitoring and automated irrigation system.
Features:
* Real-time sensor monitoring
* Automated water pump control
* Responsive dashboard
* MongoDB data storage
* Backend API integration
* Live logs and pump status updates
________________


TECH STACK
Frontend:
* HTML
* CSS
* JavaScript
Backend:
* Node.js
* Express.js
Database:
* MongoDB
Hardware:
* ESP32
* Soil Moisture Sensor
* DHT11
* LDR
* Relay Module
* Water Pump
________________


PROJECT STRUCTURE
AGROTRACK/
│
├── frontend/
│ ├── index.html
│ ├── styles.css
│ ├── script.js
│ └── AgroTrack.jpeg
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── .env
│ ├── package.json
│ ├── package-lock.json
│ └── server.js
________________


IMPORTANT
DO NOT upload or share:
backend/node_modules
If node_modules is missing, install dependencies using:
npm install
inside backend folder.
________________


REQUIRED SOFTWARE
Install the following:
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
________________


BACKEND SETUP
   1. Open terminal inside backend folder
   2. Install dependencies
npm install
   3. Start backend server
npm run dev
Expected Output:
MongoDB Connected
Server running on port 5000
________________


MONGODB CONNECTION
MongoDB should be running locally.
Connection URI:
mongodb://127.0.0.1:27017
Database Name:
agrotrack
________________


FRONTEND SETUP
   1. Open frontend folder in VS Code
   2. Install Live Server extension
   3. Right click index.html
   4. Click:
Open with Live Server
________________


BACKEND API
Base URL:
http://localhost:5000
Available APIs:
      1. Add Sensor Data
POST
/api/sensors/add
      2. Latest Sensor Data
GET
/api/sensors/latest
      3. Sensor Logs
GET
/api/sensors/logs
________________


POSTMAN TEST DATA
POST:
http://localhost:5000/api/sensors/add
JSON Body:
{
"temperature": 29,
"humidity": 68,
"soilMoisture": 35,
"lightIntensity": 270,
"pumpStatus": "ON"
}
________________


CURRENT FEATURES IMPLEMENTED
         * Responsive dashboard
         * Backend integration
         * MongoDB integration
         * Dynamic sensor updates
         * Dynamic recent logs
         * Pump status monitoring
         * Backend status monitoring
         * Mobile-friendly UI
________________


NEXT IMPLEMENTATION
         * ESP32 Wi-Fi integration
         * Live hardware sensor data
         * Relay-controlled water pump automation
         * Pump timeout protection
________________


DEFAULT PORTS
Frontend:
5500 (Live Server)
Backend:
5000
MongoDB:
27017