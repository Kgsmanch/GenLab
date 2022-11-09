import Lab from "../models/Laboratorio.js";

export async function createLabController(request, response) {
    const labBody = request.body;
    try {
        const newLab = await Lab.create({
            nome: labBody.nome,
            endereco: labBody.endereco,
            status: labBody.status,
            exame_labs: labBody.exame_labs
        });
        await newLab.save();
        return response.status(201).json(newLab);
    } catch (error) {
        if (error.code === 11000) {
            return response.status(409).json("Laboratorio ja consta em sistema");
        } else {
            return response.status(500).json(error.message);
        }
    }
};

export async function findAllLabController(request, response) {
    try {
        const findLabs = await Lab.find({
            status: "ativo"
        }).populate('exame_labs');
        return response.status(200).json(findLabs);
    } catch (error) {
        return response.status(500).json('Algo saiu errado, tente novamente');
    }
};

export async function updateLabController(request, response) {
    const labParams = request.params.nome;
    const labBody = request.body;
    const filter = { nome: labParams };
    const update = labBody;

    try {
        const updateLab = await Lab.findOneAndUpdate(filter, update, { new: true });
        return response.status(200).json(updateLab);
    } catch (error) {
        return response.status(500).json('Algo sair errado, tente novamente');
    }
};

export async function deleteLabController(request, response) {
    const labParams = request.params.nome;
    const filter = { nome: labParams };
    const update = { isDeleted: true };

    try {
        const labParams = await Lab.findOneAndUpdate(filter, update, { new: true })
        return response.status(200).json("Arquivo deletado com sucesso");
    } catch (error) {
        return response.status(500).json('Algo sair errado, tente novamente');
    }
};

export function examIncludeController(request, response) {
    const labNome = request.params.nome;
    const examBody = request.body.exame_labs;
    const updateExam = { $push: { exame_labs: examBody } };
    const result = Lab.findOneAndUpdate({ nome: labNome }, updateExam, (err, res) => {
        if (err) { return response.status(500).json('Algo sair errado, tente novamente') }
        return response.status(200).json("Exame incluido com sucesso.")

    });
};

export function examExcludeController(request, response) {
    const labNome = request.params.nome;
    const examBody = request.body.exame_Id;
    const updateExam = { $pull: { exame_labs: examBody } };
    const result = Lab.findOneAndUpdate({ nome: labNome }, updateExam, (err, res) => {
        if (err) { return response.status(500).json('Algo sair errado, tente novamente') }
        return response.status(200).json("Exame removido com sucesso.")
    });
};