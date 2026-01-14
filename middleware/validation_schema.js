const { body } = require('express-validator');

const validationSchema = () => {
    return [
        body('title')
            .notEmpty().withMessage("Title is required")
            .isLength({ min: 3 }).withMessage("Title should be at least 3 characters long"),

        body('price')
            .notEmpty().withMessage("Price is required")
            .isFloat({ gt: 0 }).withMessage("Price should be greater than 0")
    ];
};

module.exports = validationSchema;
