import { logRequestResponse } from '../helpers/logger';

export const mwLogRequestResponse = (req, res, next) => {
    res.on('finish', () => {
        logRequestResponse(req, res);
    });
    next();
}
