import express from "express";
const router = express.Router();
import { createValidator } from "../middleware/validator/laboratorio.validator.js";
import { createLabController } from "../controllers/laboratorio.controller.js";

router
    .route("/lab") //route /lab
    .post(createValidator, createLabController)

export default router;  