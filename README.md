# README #

### Prueba 2 Postulacion Autofact ###

### Intalacion y ejecución ###
1. Ejecutar DUMP contenido en proyecto autofactDB en MySql
  - El sql, se encuentra con un usuario de prueba
2. Renombrar .env.example por .env
3. Confirmar Nombre de BD en .env
4. Ejecutar npm install
5. Ejecutar npm run dev
6. Importar a Postman autofact.postman_collection.json
  - Coleccion contiene los 2 enpoint necesarios



### Consumir API ###

Endpoint

Agregar Respuestas de un usuario  
POST: http://localhost:3000/api/preguntas

request:  
- ERROR:  
  {
    "resp1":"Texto de repuesta 1",
    "resp2":"si",
    "resp3": 55,
    "userId":1
  }

- EXITO:  
{
  "resp1":"Texto de repuesta 1",
    "resp2":"no",
    "resp3": 5,
    "userId":1
}

Obtener todas las respuestas de un usuario ordenadas desde las mas nueva a la mas antigua

GET: http://localhost:3000/api/preguntas/1