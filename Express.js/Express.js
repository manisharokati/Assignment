const express = require("express"); // Import necessary modules
const app = express(); // Create an Express application
const logRequest = (req, res, next) => {
  const timestamp = new Date().toUTCString();
  const url = req.url;
  console.log(`[${timestamp}] ${url}`);
  next();
};

app.use(logRequest);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
