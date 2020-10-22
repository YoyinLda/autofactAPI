import winston, { format } from 'winston';
import path from 'path';

let pathLogger = process.env.LOGGER_PATH_FOLDER || '';

if (!pathLogger || pathLogger === '') {
    pathLogger = path.join(__dirname, '../..', 'logs/');
}

export const loggerRequestOptions = {
    format: format.combine(format.json()),
    exitOnError: false,
    transports: [
        new winston.transports.File({
            level: 'http',
            filename: path.join(pathLogger, '/request_response.log'),
            handleExceptions: true,
            json: true,
            maxsize: 5242880,
            maxFiles: 15,
            colorize: false,
            zippedArchive: true,
        })
    ]
};

export const loggerErrorOptions = {
    format: format.combine(format.json()),
    transports: [
        new winston.transports.File({
            level: 'error',
            filename: path.join(pathLogger, '/error.log'),
            handleExceptions: true,
            json: true,
            maxsize: 5242880,
            maxFiles: 15,
            colorize: false,
            zippedArchive: true,
        }),
        new winston.transports.Console({
            format: format.simple(),
            level: 'error',
            handleExceptions: true,
            json: true,
            colorize: true,
        })
    ]
};

export const loggerDebugOptions = {
    format: format.simple(),
    exitOnError: false,
    transports: [
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            colorize: true,
        })
    ]
};