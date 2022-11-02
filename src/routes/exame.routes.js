import express from "express";
const router = express.Router();
import { createValidator } from "../middleware/validator/exame.validator.js";
import { createExameController } from "../controllers/exame.controller.js";

router
    .route("/exam") //route /lab
    .post(createValidator, createExameController)

export default router;  