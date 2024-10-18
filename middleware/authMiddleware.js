const jwt = require("jsonwebtoken");
function verifyToken(req, res, next) {
 const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(403).send('Token is required');

    const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, "Polo@120");
    console.log(decoded);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = verifyToken;
