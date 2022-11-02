import express from "express";
const router = express.Router();
import { createValidator, updateValidate } from "../middleware/validator/laboratorio.validator.js";
import { createLabController, findAllLabController, updateLabController, deleteLabController } from "../controllers/laboratorio.controller.js";

router
    .route("/") //route /lab
    .post(createValidator, createLabController)
    .get(findAllLabController)

router
    .route("/:nome")
    .patch(updateValidate, updateLabController)
    .delete(deleteLabController)

export default router;