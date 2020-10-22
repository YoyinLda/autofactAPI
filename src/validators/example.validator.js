import BaseValidators from './base';
import { checkSchema } from 'express-validator';

export default class ExampleValidator extends BaseValidators {
    static get() {
        return []
    };

    /**
     * @swagger
     *  components:
     *    schemas:
     *      ExampleSchema:
     *        type: object
     *        required:
     *          - email
     *        properties:
     *          user:
     *            type: string
     *          email:
     *            type: string
     *            format: email
     *            description: Email for the user, needs to be unique.
     *          item:
     *            type: array
     *            items:
     *              type: object
     *              properties:
     *                name:
     *                  type: string
     */
    static post() {
        return checkSchema({
            // id: {
            //     isInt: {
            //         errorMessage: 'must be numeric',
            //     },
            //     in: ['params', 'query'], // PATH
            //     toInt: true // sanitizer
            // },
            // user: {
            //     optional: true,
            //     trim: true,
            //     escape: true,
            //     customSanitizer: super.sanitizeLower(),
            //     isLength: {
            //         errorMessage: 'the value must be a minimum of 8 and a maximum of 2', 
            //         options: {
            //             max: 8,
            //             min: 2
            //         }
            //     }
            // },
            // email: {
            //     isEmail: true,
            //     errorMessage: 'email is not valid',
            //     exists: {
            //         errorMessage: 'email is required'
            //     },
            //     normalizeEmail: true
            // },
            // items: {
            //     optional: true,
            //     isArray: {
            //         errorMessage: 'the value must be an Array'
            //     },
            // },
            // 'items.*.name': {
            //     exists: true,
            //     trim: true,
            //     notEmpty: {
            //         errorMessage: 'the value cannot be empty'
            //     },
            //     escape: true,
            // }
        });
    };
}
