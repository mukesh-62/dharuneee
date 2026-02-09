const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/orders", require("./routes/ordersRoutes"));
app.use("/api/messages", require("./routes/messagesRoutes"));
app.use("/api/reports", require("./routes/reportsRoutes"));
app.use("/api/system", require("./routes/systemRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
