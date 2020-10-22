import app from 'express';
import ExampleController from '../controllers/example.controller';
import ExampleValidator from '../validators/example.validator';

const routes = app.Router();

/**
 * @swagger
 * path:
 *  /example:
 *    get:
 *      summary: Get Example
 *      tags: [Examples]
 *      responses:
 *        "200":
 *          description: Return a message example
 */
routes.get('/', ExampleValidator.validate('get'), new ExampleController().get);

/**
 * @swagger
 * path:
 *  /example/{id}:
 *    post:
 *      summary: Post Example 
 *      tags: [Examples]
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ExampleSchema'
 *      responses:
 *        "200":
 *          description: A example schema 
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ExampleSchema'
 */
routes.post('/:id', ExampleValidator.validate('post'), new ExampleController().post);

export default routes;