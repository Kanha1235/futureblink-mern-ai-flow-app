import { Router } from "express";
import { getFlowHistory, runFlow, saveFlowRun } from "../controllers/flow.controller.js";

const flowRouter = Router();

flowRouter.post("/run", runFlow);
flowRouter.post("/save", saveFlowRun);
flowRouter.get("/history", getFlowHistory);

export default flowRouter;
