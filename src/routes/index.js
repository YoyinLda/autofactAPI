import app from 'express';
const routes = app.Router();

import Home from './home.routes';
import Example from './example.routes';
import Preguntas from './preguntas.routes';

routes.use('/', Home);
routes.use('/example', Example);
routes.use('/preguntas', Preguntas);


export default routes;