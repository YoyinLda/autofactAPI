import { validationResult } from 'express-validator';

const _processResponse = (data) => {
    if (Array.isArray(data) || (typeof (data) === 'object' && data !== null)) return data;
    if (data !== undefined && data !== null) return { message: data };
    return undefined;
}

export default class BaseController {
    validateParams(req, res) {
        const resValid = validationResult(req);
        if (!resValid.isEmpty()) {
            return resValid.errors.map((item) => {
                return {
                    param: item.param,
                    message: item.msg
                }
            });
        }
        return undefined;
    }

    Success(res, data) { return res.status(200).json(_processResponse({ error: false, ...data })) }
    SuccessNoContent(res) { return res.status(204).send({ error: false }); }

    SuccessCreated(res, data) { return res.status(201).json(_processResponse({ error: false, ...data })) }
    SuccessMultipleOperations(res, data) { return res.status(207).json(_processResponse({ error: false, ...data })) }

    ErrorBadRequest(res, error) { return res.status(400).json(_processResponse({ error: true, ...error })) }
    ErrorBadParams(res, error) { return res.status(422).json({ error: true, params: true, problems: { ...error } }) }

    InteralError(res, error) { return res.status(500).json({ error: true, ...error }) }

    NotFound(res, error) { return res.status(404).json({ error: true, ...error }) }
    Unauthorized(res, error) { return res.status(401).send({ error: true, ...error }) }
}