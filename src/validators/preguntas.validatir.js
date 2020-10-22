import BaseValidators from "./base";
import { checkSchema } from "express-validator";

export default class PreguntasValidator extends BaseValidators {
  static create() {

    
    return checkSchema({
      userId: {
        exists: {
          errorMessage: "El parametro no puede ser nulo"
        },
        isInt: {
          
          errorMessage: "Debe ser nùmerico"
        },
        toInt: true,
        in: ["body"],
      },
      resp1: {
        exists: {
          errorMessage: "El parametro no puede ser nulo"
        },
        in: ["body"], 
      },
      resp2: {
        exists: {
          errorMessage: "El parametro no puede ser nulo"
        },
        in: ["body"],
      },
      resp3: {
        exists: {
          errorMessage: "El parametro no puede ser nulo"
        },
        isInt: {
          errorMessage: "Debe ser nùmerico"
        },
        toInt: true,
        in: ["body"],
      },
    });
  }
  static get() {
    return checkSchema({
      userId: {
        exists: {
          errorMessage: "El parametro no puede ser nulo"
        },
        isInt: {
          errorMessage: "Debe ser nùmerico"
        },
        toInt: true,
        in: ["params"], 
      }
    });
  }
  
}
