const Personagem = require("./personagem");

class personagemServices {
  createPersonagemService = async (body) => {
    return await Personagem.create(body);
  };
  findByNameService = async (name) => {
    return await Personagem.findOne({ name: name });
  };
  findByIdService = async (id) => {
    return await Personagem.find({ _id: id });
  };
  updatePersonagemService = async (id, body) => {
    return await Personagem.findOneAndUpdate({ _id: id }, body, { new: true });
  };
  deletePersonagemService = async (id) => {
    return await Personagem.findOneAndDelete({ _id: id });
  };
  searchPersonagemService = async (name) => {
    return await Personagem.findOne({ name: name });
  };
  getAllPersonagemService = async (limit, offset) => {
    const allPersonagem = await personagem.find();
    const setOffset = Number(offset) > 0 ? Number(offset - 1) : 0;
    const setLimit =
      Number(limit) > 0 ? Number(limit) : allPersonagem.length - setOffset;
    const showPersonagem = await allPersonagem.splice(setOffset, setLimit);
    return await showPersonagem;
  };
}

module.exports = personagemServices = new PersonagemServices();