
const _originDefault = process.env.CORS_ORIGIN || '*'; 
const _methodsDefault = process.env.CORS_METHODS || ['GET', 'PUT', 'POST', 'DELETE'];

let origin = _originDefault.charAt(0) === '[' ?
    JSON.parse(_originDefault) : _originDefault;

let methods = !Array.isArray(_methodsDefault) && _methodsDefault.charAt(0) === '[' ?
    JSON.parse(_methodsDefault) : _methodsDefault;

let corsOptions = {
    origin,
    methods
};

export default corsOptions;