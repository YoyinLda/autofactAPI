import winston from 'winston';
import moment from 'moment';
import { loggerRequestOptions, loggerErrorOptions, loggerDebugOptions } from '../config/logger.config';

const nameLogRequestResponse = 'request';
const nameLogError = 'error';
const nameLogDebug = 'debug';

winston.loggers.add(nameLogRequestResponse, loggerRequestOptions);
winston.loggers.add(nameLogError, loggerErrorOptions);
winston.loggers.add(nameLogDebug, loggerDebugOptions);

export const logRequestResponse = (req, res) => {
    const log = winston.loggers.get(nameLogRequestResponse);
    
    const record = {
        ip: req.ip,
        date: moment().format('YYYY/MM/DD HH:mm:ss'),
        request: {
            url: req.originalUrl,
            method: req.method,
            query: req.query,
            params: req.params,
            body: req.body
        },
        response: {
            status: res.statusCode,
            message: res.statusMessage,
            body: res.body, // TODO: Get body response
        }
    };
    log.http(record);
};

export const logError = (err) => {
    const log = winston.loggers.get(nameLogError);
    log.error(err);
};

export const logDebug = (data) => {
    const log = winston.loggers.get(nameLogDebug);
    log.debug(data);
}