const express = require("express");
require('dotenv').config()
const adminRoutes = require("./routes/admin.routes");
const userRoutes = require("./routes/user.routes");

const PORT = process.env.PORT || 8000
const connectToDB = require("./db/db");

const app = express();

connectToDB()
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
