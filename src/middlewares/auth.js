const jwt = require('jsonwebtoken');

export default class Auth {
  static checkAuth(req, res, next) {
    // next();
    // return false;
    if (!req.headers['authorization']) {
      return res.status(401).send({ error: true, auth: false, message: 'No se ha enviado token para autenticar.' });
    }
    
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
      return res.status(401).send({ error: true, auth: false, message: 'No se ha enviado token para autenticar.' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({ auth: false, message: 'Problemas con validar el token', error: err.name });
      }
      req.user = {
        login: decoded.login,
        id: decoded.id
      };
      next();
    });
  };
}