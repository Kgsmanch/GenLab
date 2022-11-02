import { schemaExam, schemaExamOptional } from "./schema.validator.js";

export async function createValidator(request, response, next) {
    const examBody = request.body
    try {
        const result = await schemaExam.validateAsync({
            nome: examBody.nome,
            tipo: examBody.tipo,
            status: examBody.status
        })
        next();
    } catch (error) {
        console.log(error)
    }
}