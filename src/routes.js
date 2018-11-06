const express = require('express');

//Instacia rotas
const routes  = express.Router();

//Importa Controller
const TweetController = require('./controllers/TweetController');

//Retorna Tweets
routes.get('/tweets' ,TweetController.index);
//Criar Tweet
routes.post('/tweets' ,TweetController.store);

//Exporta rotas
module.exports = routes;