import express from "express";
const router = express.Router();
import { createValidator, updateValidate } from "../middleware/validator/laboratorio.validator.js";
import {
    createLabController,
    findAllLabController,
    updateLabController,
    deleteLabController,
    examIncludeController,
    examExcludeController
} from "../controllers/laboratorio.controller.js";

router
    .route("/") //route /lab
    .post(createValidator, createLabController)
    .get(findAllLabController)

router
    .route("/:nome")//route /lab/:nome
    .patch(updateValidate, updateLabController)
    .delete(deleteLabController)

router
    .route("/exams/include/:nome") //route /lab/exams/include:nome
    .patch(examIncludeController)

router
    .route("/exams/exclude/:nome") //route /lab/exams/exclude:nome
    .patch(examExcludeController)
export default router;