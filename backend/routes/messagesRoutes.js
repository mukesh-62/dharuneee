const express = require("express");
const router = express.Router();
const fs = require("fs-extra");
const path = require("path");

const file = path.join(__dirname, "../data/messages.json");

router.get("/", async (req, res) => {
  const data = await fs.readJson(file);
  res.json(data);
});

router.post("/", async (req, res) => {
  const data = await fs.readJson(file);

  const newMessage = {
    id: Date.now(),
    message: req.body.message,
    timestamp: new Date().toISOString(),
  };

  data.push(newMessage);
  await fs.writeJson(file, data, { spaces: 2 });

  res.json({ success: true, message: newMessage });
});

module.exports = router;
