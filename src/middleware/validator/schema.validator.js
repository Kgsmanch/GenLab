import Joi from "joi";

export const schemaLab = Joi.object().keys({
    name: Joi.string()
        .min(3)
        .max(40)
        .required(),
    endereco: Joi.string()
        .min(5)
        .max(70)

})
