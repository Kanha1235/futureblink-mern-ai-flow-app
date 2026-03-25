import express from "express";
import cors from "cors";
import envObj from "./src/configs/env.config.js";
import connectToDatabase from "./src/configs/db.config.js";
import flowRouter from "./src/routes/flow.route.js";
import { apiRateLimiter } from "./src/middlewares/rateLimit.middleware.js";

const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(
  cors({
    origin: envObj.clientUrl,
  })
);
app.use(apiRateLimiter);

app.get("/", (req, res) => {
  return res.status(200).send("FutureBlink MERN backend is working");
});

app.get("/api/v1/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "server healthy",
  });
});

app.use("/api/v1/flows", flowRouter);

async function connectDB() {
  try {
    await connectToDatabase();
    app.listen(envObj.port, () => {
      console.log(`Server running on port ${envObj.port}`);
    });
  } catch (error) {
    console.log(error);
    console.log("Failed Database Connection");
  }
}

connectDB();
