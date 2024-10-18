const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");
const protectedRoute = require("./routes/protectedRoute");
const mongoose = require('mongoose');
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/protected", protectedRoute);

app.get("/auth", (req, res) => {
  res.send("Auth route is working!");
});

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/jwt-auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });