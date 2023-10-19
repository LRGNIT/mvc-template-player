// models/music.js
const musicData = [
    { id: 1, nome: 'Música 1', arquivo: 'musica1.mp3', duracao: '3:10' },
    { id: 2, nome: 'Música 2', arquivo: 'musica2.mp3', duracao: '3:35' },
    { id: 3, nome: 'Música 3', arquivo: 'musica3.mp3', duracao: '3:30' },
    // Adicione mais músicas conforme necessário
  ];
  
  class Music {
    static getAll() {
      return musicData;
    }
  
    static getById(id) {
      return musicData.find((music) => music.id === id);
    }
  
    static create(music) {
      musicData.push(music);
    }
    
  
    static update(id, music) {
      const index = musicData.findIndex((m) => m.id === id);
      if (index !== -1) {
        musicData[index] = music;
      }
    }
  
    static delete(id) {
      const index = musicData.findIndex((m) => m.id === id);
      if (index !== -1) {
        musicData.splice(index, 1);
      }
    }
  }
  
  module.exports = Music;
  