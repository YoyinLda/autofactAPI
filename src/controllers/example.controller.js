import BaseController from './base';

export default class ExampleController extends BaseController {
  get(req, res) {
    const notValid = super.validateParams(req, res);
    if (notValid) return super.ErrorBadParams(res, notValid);

    return super.Success(res, {
      message: `Example success`
    });
  }
  post(req, res) {
    const notValid = super.validateParams(req, res);
    if (notValid) return super.ErrorBadParams(res, notValid);
    const id = req.params.id;
    const query = req.query;
    return super.SuccessCreated(res, { message: `Creado con exito ${id} ${query ? query : ''}` });
  }
}