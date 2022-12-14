import Joi from "joi";

export const schemaLab = Joi.object().keys({
    nome: Joi.string()
        .min(3)
        .max(40)
        .required(),
    endereco: Joi.string()
        .min(5)
        .max(70)
        .required(),
    status: Joi.any()
        .valid('ativo', 'inativo')
        .required(),
});

export const schemaLabOptional = Joi.object().keys({
    nome: Joi.string()
        .min(3)
        .max(40),
    endereco: Joi.string()
        .min(5)
        .max(70),
    status: Joi.any()
        .valid('ativo', 'inativo'),
});

// ________________EXAMES VALIDATOR_________________________

export const schemaExam = Joi.object().keys({
    nome_exame: Joi.string()
        .min(3)
        .max(40)
        .required(),
    tipo_exame: Joi.string()
        .valid('analise clinica', 'imagem')
        .required(),
    status_exame: Joi.string()
        .valid('ativo', 'inativo')
        .required(),
});

export const schemaExamOptional = Joi.object().keys({
    nome_exame: Joi.string()
        .min(3)
        .max(40),
    tipo_exame: Joi.string()
        .valid('analise clinica', 'imagem'),
    status_exame: Joi.string()
        .valid('ativo', 'inativo'),
});