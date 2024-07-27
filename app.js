const express = require('express');
const app = express();

// API routes
const indexRouter = require('./src/routes/index');
app.use('/', indexRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: true, data: "Internal Server Error" });
});

// Default route
app.get("/", (req, res) => {
  res.status(200).json({ error: false, data: "Sigma prioritization API" });
});

// Start the application
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}...`);
});

module.exports = app;
