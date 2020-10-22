import BaseController from './base';

export default class HomeController extends BaseController {
    HomeController(){}

    get(req, res) {
        return super.SuccessNoContent(res);
    }
}