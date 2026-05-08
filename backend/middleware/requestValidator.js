module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({ success: false, message: "Possible MITM attack detected" });
  }

  // Allow static Arduino key
  const staticKey = `Bearer ${process.env.ARDUINO_API_KEY}`;
  if (authHeader === staticKey) return next();

  // Otherwise normal JWT flow continues
  next();
};