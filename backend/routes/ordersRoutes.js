const express = require("express");
const router = express.Router();
const fs = require("fs-extra");
const path = require("path");

const file = path.join(__dirname, "../data/orders.json");

// GET all orders
router.get("/", async (req, res) => {
  const data = await fs.readJson(file);
  res.json(data);
});

// CREATE new order
router.post("/", async (req, res) => {
  const data = await fs.readJson(file);
  
  const newOrder = {
    id: Date.now(),
    patient: req.body.patient,
    modality: req.body.modality,
    status: req.body.status,
    timestamp: new Date().toISOString(),
  };

  data.push(newOrder);
  await fs.writeJson(file, data, { spaces: 2 });

  res.json({ success: true, order: newOrder });
});

module.exports = router;
