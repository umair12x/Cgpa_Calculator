require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const apiKeyMiddleware = require("./middlewares/api_key.js");
const router = require("./routes/result-route.js");

const corsOptions = {
  origin: ["http://localhost:5173", "https://yourdomain.vercel.app"],
  methods: "GET,POST,PUT,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiKeyMiddleware);

app.use("/Cgpa", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
