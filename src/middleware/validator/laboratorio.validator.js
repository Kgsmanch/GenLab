import Joi from "joi";
import { schemaLab, schemaLabOptional } from "./schema.validator.js";

export async function createValidator(request, response, next) {
    const labBody = request.body
    try {
        const result = await schemaLab.validateAsync({
            nome: labBody.nome,
            endereco: labBody.endereco,
            status: labBody.status,
        })
        next();
    } catch (error) {
        return response.status(401).json(error.message);
    }
}

export async function updateValidate(request, response, next) {
    const labBody = request.body
    try {
        const result = await schemaLabOptional.validateAsync({
            nome: labBody.nome,
            endereco: labBody.endereco,
            status: labBody.status,
        })
        next();
    } catch (error) {
        return response.status(401).json(error.message);
    }
}