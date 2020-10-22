import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import { logDebug, logError } from './helpers/logger';
import { swagger, swaggerSetup, mdwSwagger, swaggerSpecs } from './config/swagger.config';
import './config/env-variables.config';
import corsOptions from './config/cors.config';
import { mwLogRequestResponse } from './middlewares/request-response';
import routes from './routes';
import "@babel/polyfill";



const app = express();
app.use(compression());
app.use(cors(corsOptions));
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));
app.use(helmet());

if (process.env.LOGGER_REQUEST && process.env.LOGGER_REQUEST === 'true') {
    app.use(mwLogRequestResponse);
}

const basePath = 'api/';
const port = process.env.API_PORT || 3000;

process.on('unhandledRejection', (reason, p) => { logError(reason); })
    .on('uncaughtException', err => { logError(err); });

if (process.env.NODE_ENV !== 'production') {
    app.use('/api-docs/', mdwSwagger, swagger.serve, swaggerSetup);
    app.get('/api-docs.json', mdwSwagger, (req, res) => res.json(swaggerSpecs));
}

app.use(`/${basePath}`, routes);

app.listen(port, () => {
    if (process.env.NODE_ENV !== 'production') {
        logDebug(`API running on http://localhost:${port}/${basePath}`);
    }
});