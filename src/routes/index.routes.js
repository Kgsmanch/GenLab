import express from "express";
const router = express.Router();
import labRoute from "./laboratorio.routes.js";
import exameRoute from "./exame.routes.js";

router.use('/lab', labRoute);
router.use('/', exameRoute);


export default router;