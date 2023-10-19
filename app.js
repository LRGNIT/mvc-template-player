const express = require('express');
const app = express();
const musicController = require('./controllers/musicController');
const path = require("path");
// Configuração do template engine EJS.
app.set('view engine', 'ejs');

// Middleware para processar o corpo das requisições.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/musicas', express.static(path.join(__dirname, 'musicas')));

// Rota principal
app.use('/music', musicController);

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
