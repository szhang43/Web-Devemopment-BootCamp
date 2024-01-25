const joi = require("joi");
module.exports.validateCampground =  joi.object({
        camp: joi.object({
            title : joi.string().required(),
            price : joi.number().required().min(0),
            description : joi.string().required().max(500),
            img : joi.string().required()
        }).required()
    });
