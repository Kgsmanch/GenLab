import { schemaExam, schemaExamOptional } from "./schema.validator.js";

export async function createValidator(request, response, next) {
    const examBody = request.body
    try {
        const result = await schemaExam.validateAsync({
            nome_exame: examBody.nome_exame,
            tipo_exame: examBody.tipo_exame,
            status_exame: examBody.status_exame
        })
        next();
    } catch (error) {
        return response.status(401).json(error.message);
    }
}

export async function updateValidator(request, response, next) {
    const examBody = request.body;
    try {
        const result = await schemaExamOptional.validateAsync({
            nome_exame: examBody.nome_exame,
            tipo_exame: examBody.tipo_exame,
            status_exame: examBody.status_exame
        })
        next()
    } catch (error) {
        return response.status(401).json(error.message);
    };
};