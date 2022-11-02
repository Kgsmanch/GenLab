import express from "express";
const router = express.Router();
import labRoute from "./laboratorio.routes.js";
import exameRoute from "./exame.routes.js";

router.use('/', labRoute);
router.use('/', exameRoute);


export default router;