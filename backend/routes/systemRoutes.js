const express = require("express");
const router = express.Router();
const fs = require("fs-extra");
const path = require("path");

const file = path.join(__dirname, "../data/system.json");

router.get("/traffic", async (req, res) => {
  const data = await fs.readJson(file);
  res.json(data);
});

router.post("/traffic", async (req, res) => {
  const data = await fs.readJson(file);

  const newEntry = {
    hour: req.body.hour,
    messages: req.body.messages
  };

  data.push(newEntry);
  await fs.writeJson(file, data, { spaces: 2 });

  res.json({ success: true, entry: newEntry });
});

module.exports = router;
