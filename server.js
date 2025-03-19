const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, "db.json");

// Read JSON data
const getData = () => {
  return JSON.parse(fs.readFileSync(dbPath, "utf8"));
};

// Serve users data
app.get("/users", (req, res) => {
  const data = getData();
  res.json(data.users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

