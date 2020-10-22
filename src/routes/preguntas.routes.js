import app from 'express';
import Preguntas from '../controllers/preguntascontroller';
import Auth from "../middlewares/auth";
import PreguntasValidator from '../validators/Preguntas.validatir';

const routes = app.Router();
/** GET */
routes.get('/:userId', PreguntasValidator.validate('get'), new Preguntas().getAll);

/** POST */
routes.post('/', PreguntasValidator.validate('create'), new Preguntas().create);
// routes.post('/addTags', Auth.checkAuth, TagValidator.validate('createMany'), new Preguntas().createManyTags);


export default routes;