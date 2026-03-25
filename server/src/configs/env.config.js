import dotenv from "dotenv";
dotenv.config();

const port = Number(process.env.PORT);
if (!port) {
  throw new Error("PORT is undefined");
}

const mongoUri = String(process.env.MONGO_URI || "");
if (!mongoUri) {
  throw new Error("MONGO_URI is undefined");
}

const dbName = String(process.env.DB_NAME || "futureblink_ai_flow");
if (!dbName) {
  throw new Error("DB_NAME is undefined");
}

const clientUrl = String(process.env.CLIENT_URL || "");
if (!clientUrl) {
  throw new Error("CLIENT_URL is undefined");
}

const openRouterApiKey = String(process.env.OPENROUTER_API_KEY || "");
if (!openRouterApiKey) {
  throw new Error("OPENROUTER_API_KEY is undefined");
}

const openRouterModel = String(
  process.env.OPENROUTER_MODEL || "google/gemini-2.0-flash-lite-preview-02-05:free"
);
if (!openRouterModel) {
  throw new Error("OPENROUTER_MODEL is undefined");
}

const envObj = Object.freeze({
  port,
  mongoUri,
  dbName,
  clientUrl,
  openRouterApiKey,
  openRouterModel,
});

export default envObj;
