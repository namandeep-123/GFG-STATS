import { Router } from "express";
import { getGFGStats } from "./controller";

const router = Router();

router.get("/", getGFGStats);

export default router;
