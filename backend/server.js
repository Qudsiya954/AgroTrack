const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();
const authRoutes = require('./routes/authRoutes');
const irrigationRoutes =require('./routes/irrigationRoutes');
const alertRoutes =require('./routes/alertRoutes');
const analyticsRoutes =require("./routes/analyticsRoutes");
const limiter =require("./middleware/rateLimiter");
const helmet =require("helmet");


app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(limiter);
// Routes
app.use('/api/sensors', require('./routes/sensorRoutes'));
app.use('/api/irrigation', irrigationRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/analytics', analyticsRoutes);
app.get('/', (req, res) => {
  res.send('AgroTrack Backend Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});