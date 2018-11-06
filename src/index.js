//Dependencias
const express = require('express');
const mongoose = require('mongoose');

//Instancia aplicacao
const app = express();

//Conecta banco de dados
mongoose.connect(
    "mongodb://goweek:goweek123@ds047468.mlab.com:47468/goweek-backend",
    {
        useNewUrlParser: true
    }
);

//Seta JSON como padrao
app.use(express.json());
//Rotas
app.use(require('./routes'));

//Inicia aplicacao
app.listen(3000, () => {
    console.log('Server iniciado na porta 3000');
});