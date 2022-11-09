import express from "express";
const router = express.Router();
import { createValidator, updateValidator } from "../middleware/validator/exame.validator.js";
import {
    createExameController,
    findAllExamController,
    updateExamController,
    deleteExamController,
    findWhereExamController
} from "../controllers/exame.controller.js";

router
    .route("/") //route /exam
    .get(findAllExamController)
    .post(createValidator, createExameController)

router
    .route("/:nome") //route /exam/:nome
    .patch(updateValidator, updateExamController)
    .delete(deleteExamController)

router
    .route("/where/:nome") //route /exam/where/:nome
    .get(findWhereExamController)

export default router;
