const express = require("express");
const router = express.Router();
const fs = require("fs-extra");
const path = require("path");

const file = path.join(__dirname, "../data/reports.json");

router.get("/", async (req, res) => {
  const data = await fs.readJson(file);
  res.json(data);
});

router.post("/", async (req, res) => {
  const data = await fs.readJson(file);

  const newReport = {
    id: Date.now(),
    patient: req.body.patient,
    modality: req.body.modality,
    status: req.body.status,
    timestamp: new Date().toISOString(),
  };

  data.push(newReport);
  await fs.writeJson(file, data, { spaces: 2 });

  res.json({ success: true, report: newReport });
});

module.exports = router;
