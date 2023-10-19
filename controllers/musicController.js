// controllers/musicController.js
const express = require('express');
const router = express.Router();
const Music = require('../models/music');

// Rota para obter todas as músicas.
router.get('/', (req, res) => {
  const allMusic = Music.getAll();
  res.json(allMusic);  
});

// Rota para obter uma música por ID.
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const music = Music.getById(id);

  if (music) {

  var musicaInfo;

  if (id == 1) {
    musicaInfo = {
      "id": 1,
      "nome": "Música 1",
      "arquivo": "musica1.mp3",
      "duracao": "3:10"
    };
  }

  if (id == 2) {
    musicaInfo = {
      "id": 2,
      "nome": "Música 2",
      "arquivo": "musica2.mp3",
      "duracao": "3:35"
    };
  }

  if (id == 3) {
    musicaInfo = {
      "id": 3,
      "nome": "Música 3",
      "arquivo": "musica3.mp3",
      "duracao": "3:30"
    };
  }
  
  // Renderize a página HTML e passe as informações da música como variáveis para o template
  res.render('index', { musicaInfo });
  
  } else {
    res.status(404).json({ message: 'Música não encontrada.' });
  }
});

// Rota para adicionar uma nova música.
router.post('/:id', (req, res) => {
  const { id, nome, arquivo, duracao } = req.body;
  //const newMusic = { id: Date.now(), nome, arquivo, duracao };
  const newMusic = { id, nome, arquivo, duracao };
  Music.create(newMusic);
  res.status(201).json(newMusic);
  //res.status(201).json({ message: 'Música adicionada com sucesso.' });
});

// Rota para atualizar uma música por ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const music = Music.getById(id);

  if (!music) {
    return res.status(404).json({ message: 'Música não encontrada.' });
  }

  const {nome, arquivo, duracao } = req.body;
  music.nome = nome;
  music.arquivo = arquivo;
  music.duracao = duracao;

  Music.update(id, music);
  res.json({ message: 'Música alterada com sucesso.' });
});

// Rota para excluir uma música por ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const music = Music.getById(id);

  if (!music) {
    return res.status(404).json({ message: 'Música não encontrada.' });
  }

  Music.delete(id);
  res.json({ message: 'Música excluída com sucesso.' });
});

module.exports = router;
