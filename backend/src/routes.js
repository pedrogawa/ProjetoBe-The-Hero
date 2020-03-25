/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parãmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após o "?". (Filtros, páginação) /request.query
   * Route Params: Parâmetros utilizados para identificar recursos. /request.params
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos. /request.body
   */

  /**
   * SQL: MySQL, SQLite, PostreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc.
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*'). where()
    */

const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);
routes.get('/ongs', OngController.index);
routes.get('/profile', ProfileController.index);
routes.post('/ongs', OngController.create);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;