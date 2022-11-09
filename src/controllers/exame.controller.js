import ExameSchema from "../models/Exame.js";
import Lab from "../models/Laboratorio.js";

export async function createExameController(request, response) {
    const examBody = request.body
    try {
        const newExam = await ExameSchema.create({
            nome_exame: examBody.nome_exame,
            tipo_exame: examBody.tipo_exame,
            status_exame: examBody.status_exame
        })
        await newExam.save()
        return response.status(201).json(newExam);
    } catch (error) {
        console.log(error)
        if (error.code === 11000) {
            return response.status(409).json("Exame já consta em sistema")
        } else {
            return response.status(500).json("Algo saiu errado, tente novamente");
        }
    }
}

export async function findAllExamController(request, response) {
    try {
        const findExams = await ExameSchema.find();
        return response.status(200).json(findExams);
    } catch (error) {
        return response.status(500).json("Algo saiu errado, tente novamente");
    }
}

export async function updateExamController(request, response) {
    const examParams = request.params.nome;
    const examBody = request.body;

    const filter = { nome_exame: examParams };
    const update = examBody;
    try {
        const updateExam = await ExameSchema.findOneAndUpdate(filter, update, { new: true })
        return response.status(200).json(updateExam);
    } catch (error) {
        return response.status(500).json(error);
    }
}

export async function deleteExamController(request, response) {
    const examParams = request.params.nome;
    const filter = { nome: examParams };
    const update = { isDeleted: true };
    try {
        const examParams = await ExameSchema.findOneAndUpdate(filter, update, { new: true });
        return response.status(200).json("Arquivo deletado com sucesso");
    } catch (error) {
        return response.status(500).json("Algo saiu errado, tente novamente");
    }
}

export async function findWhereExamController(request, response) {
    const examParams = request.params.nome;
    const filter = `{exame_labs:{$in:[${examParams}]}`;
    try {
        const result = await Lab
            .find({ exame_labs: { _id: examParams } })
            .select({ nome: 1, endereco: 1, _id: 0, exame_labs: 0 })
            .populate('exame_labs')
        return response.status(200).json(result);
    } catch (error) {
        return response.status(500).json("Algo saiu errado, tente novamente");
    }
}