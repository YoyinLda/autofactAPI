import BaseValidators from "./base";
import { checkSchema } from "express-validator";

export default class AuthValidator extends BaseValidators {
  static loginSocial() {
    return checkSchema({
      email: {
        isEmail: true,
        errorMessage: 'El email no es válido',
        exists: {
          errorMessage: 'El email es requerido'
        },
        normalizeEmail: true,
        customSanitizer: super.sanitizeLower(),
      },
      name: {
        exists: {
          errorMessage: "El parametro no puede ser nulo"
        },
        in: ["body"], // PATH
      },
      last_name: {
        exists: {
          errorMessage: "El parametro no puede ser nulo"
        },
        in: ["body"], // PATH
      },
      avatar: {
        exists: {
          errorMessage: "El parametro no puede ser nulo"
        },
        in: ["body"], // PATH
      },
      provider: {
        exists: {
          errorMessage: "El parametro no puede ser nulo"
        },
        in: ["body"], // PATH
      }
    });
  }
  
  static login() {
    return checkSchema({
      email: {
        isEmail: true,
        errorMessage: 'El email no es válido',
        exists: {
          errorMessage: 'EL email es requerido'
        },
        normalizeEmail: true,
        customSanitizer: super.sanitizeLower(),
      },
      password: {
        exists: {
          errorMessage: "El parametro no puede ser nulo"
        },
        in: ["body"], // PATH
      }
    });
  }
  static refreshToken() {
    return checkSchema({
      email: {
        exists: {
          errorMessage: "El parametro no puede ser nulo"
        },
        in: ["body"], // PATH
      },
      id: {
        exists: {
          errorMessage: "El parametro no puede ser nulo"
        },
        isInt: {
          errorMessage: "Debe ser nùmerico"
        },
        in: ["body"], // PATH
        toInt: true
      }
    });
  }
}
