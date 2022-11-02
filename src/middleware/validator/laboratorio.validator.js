import Joi from "joi";

export function createValidator(request, response, next) {
    console.log('ok passando pelo middleware')
    next();
}