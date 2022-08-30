const mongoose = require("mongoose");

const PersonagemSchema = new mongoose.Schema({
  Nome: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
 
});

module.exports = Personagem = mongoose.model( "Personagem", PersonagemSchema);