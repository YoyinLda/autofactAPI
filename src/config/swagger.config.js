import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import { name, version, description } from '../../package.json';

const port = process.env.API_PORT || 3000;

const options = {
    swaggerDefinition: {
        openapi: "3.0.2",
        info: {
            title: name,
            version: version,
            description: description,
        },
        servers: [
            {
                url: `http://localhost:${port}/api`,
                description: 'Local'
            }
        ],
    },
    apis: [
        path.join(__dirname, '../', 'validators/*.validator.js'),
        path.join(__dirname, '../', 'routes/*.routes.js')
    ]
};

export let swaggerSpecs = swaggerJsdoc(options);

export const mdwSwagger = (req, res, next) => {
    next();
};

export const swagger = swaggerUi;
export const swaggerSetup = swaggerUi.setup(swaggerSpecs, {
    explorer: false
});