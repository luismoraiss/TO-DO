import { Router } from "express";
import {create} from "../controllers/tarefaControllers.js"

const router = Router()


router.post("/", create)

export default router;