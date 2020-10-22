import BaseController from "./base";

const Preguntas = require("../models").preguntas;
const User = require("../models").user;

export default class PreguntasController extends BaseController {
  PreguntasController() { }
  getAll(req, res) {
    const notValid = super.validateParams(req, res);
    if (notValid) {
      return super.ErrorBadParams(res, notValid);
    }

    Preguntas.findAll({
      where: {
        id_user: req.params.userId
      },
      order: [
        ['created_at', 'DESC'],
      ]
    })
    .then(resp => {
      return super.Success(res, {
        resp
      });
    })
    .catch(error => {
      return super.ErrorBadRequest(res, {
        message: `Problemas con obtener respuestas de usuario ${error}`
      });
    });
  }

  create(req, res) {
    const notValid = super.validateParams(req, res);
    if (notValid) {
      return super.ErrorBadParams(res, notValid);
    }
    console.log(req.body)

    if(req.body.resp3 > 5 || req.body.resp3 < 1){
      return super.ErrorBadParams(res, {message : "respuesta 3 debe ser numero entre 1 y 5"});
    }
    if(req.body.resp2.toUpperCase() != "SI" && req.body.resp2.toUpperCase() != "NO"  && req.body.resp2.toUpperCase() != "MÁS MENOS"){
      return super.ErrorBadParams(res, {message : "respuesta 2 no valida"});
    }
    User.findOne({
      where:{
        id:req.body.userId
      }
    }).then(resp => {
      console.log(resp)
      if(!resp){
        return super.NotFound(res, {
          message: `Usuario no encontrado`
        });
      }
      let preguntas = {
        id_user:req.body.userId,
        resp1:req.body.resp1,
        resp2:req.body.resp2,
        resp3:req.body.resp3,
      };
  
      Preguntas.create(preguntas)
      .then(resp => {
        console.log(resp);
        return super.SuccessCreated(res, {
          message: 'Respuestas agregadas correctamente'
        })
      }).catch(error => {
        return super.ErrorBadRequest(res, {
          message: `Problemas al guardar respuestas ${error}`
        });
      });

    }).catch(error => {
      return super.ErrorBadRequest(res, {
        message: `Problemas ${error}`
      });
    });

    
    
  }

  
}