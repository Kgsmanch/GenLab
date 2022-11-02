import Lab from "../models/Laboratorio.js";

export async function createLabController(request, response) {
    const labBody = request.body;
    try {
        const newLab = await Lab.create({
            nome: labBody.nome,
            endereco: labBody.endereco,
            status: labBody.status
        })
        await newLab.save()
        return response.status(200).json(newLab);
    } catch (error) {
        if (error.code === 11000) {
            return response.status(409).json("Laboratorio ja consta em sistema");
        } else {
            return response.status(500).json("Algo saiu errado, tente novamente");
        }
    }
}

export async function findAllLabController(request, response) {
    try {
        const findLabs = await Lab.find({
            status: "ativo"
        })
        return response.json(findLabs)
    } catch (error) {
        return response.status(500).json('Algo sair errado, tente novamente');
    }
}

// https://mongoosejs.com/docs/tutorials/findoneandupdate.html
export async function updateLabController(request, response) {
    const labParams = request.params.nome
    const labBody = request.body

    const filter = { nome: labParams }
    const update = labBody
    try {
        const updateLab = await Lab.findOneAndUpdate(filter, update, { new: true })
        return response.status(200).json(updateLab)
    } catch (error) {
        return response.status(500).json('Algo sair errado, tente novamente');
    }
}

export async function deleteLabController(request, response) {
    const labParams = request.params.nome
    const filter = { nome: labParams }
    const update = { isDeleted: true }
    try {
        const labParams = await Lab.findOneAndUpdate(filter, update, { new: true })
        return response.status(200).json("ok")
    } catch (error) {
        return response.status(500).json('Algo sair errado, tente novamente');
    }
}