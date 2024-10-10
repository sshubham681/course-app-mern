const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

function authMiddleware(req, res, next) {
  const username = req.body.username;
  const token = req.headers.authorization;
  try {
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData?.username === username) {
      next();
    } else {
      res.status(403).send({
        message: "User not found",
      });
    }
  } catch (error) {
    res.send({
      message: "Invalid credentials",
    });
  }
}

module.exports = authMiddleware