const personagemServices = require("./personagem.service");

class PersonagemControllers {
  createPersonagemController = async (req, res) => {
    try {
      const { user, name, imageUrl } = req.body;
      const findByName = await personagemServices.findByNameService(name);

      if (findByName) {
        res.status(400).send({ message: "O nome já está registrado" });
      } else {
        const created = await personagemServices.createPersonagemService({
          user,
          name,
          imageUrl,
        });
        if (!created) {
          res.status(400).send({ message: "Erro ao criar personagem" });
        } else {
          res.status(201).send(created);
        }
      }
    } catch (err) {
      res.status(400).send({ message: "Erro ao criar personagem" });
    }
  };

  getAllPersonagemController = async (req, res) => {
    try {
      const limit = req.query.limit;
      const offset = req.query.offset;
      const personagemList = await personagemServices.getAllPersonagemService(
        limit,
        offset
      );
      if (!personagemList || personagemList.length === 0) {
        res.status(404).send({ message: "Personagem não encontrado" });
      } else {
        res.status(200).send(personagemList);
      }
    } catch (err) {
      res.status(404).send({ message: "Personagem não encontrado" });
    }
  };

  findByIdController = async (req, res) => {
    try {
      const foundPersonagem = await personagemServices.findByIdService(req.params.id);
      if (!foundPersonagem || foundPersonagem.length === 0) {
        res.status(404).send({ message: "Id not Found" });
      } else {
        res.status(200).send(foundPersonagem);
      }
    } catch (err) {
      res.status(404).send({ message: "Id não encontrado" });
    }
  };

  updatePersonagemController = async (req, res) => {
    try {
      const id = req.params.id;
      const { name, imageUrl } = req.body;
      const updated = await personagemServices.updatePersonagemService(id, {
        name,
        imageUrl,
      });
      if (!updated) {
        res.status(400).send({ message: "Id não encontrado" });
      } else {
        res.status(200).send(updated);
      }
    } catch (err) {
      res.status(400).send({ message: "Erro ao atualizar" });
    }
  };

  deletePersonagemController = async (req, res) => {
    try {
      const deleatedPersonagem = await personagemServices.deletePersonagemService(
        req.params.id
      );
      if (!deleatedPersonagem) {
        res.status(404).send({ message: "Id não encontrado" });
      } else {
        res.status(200).send(deleatedPersonagem);
      }
    } catch (err) {
      res.status(404).send({ message: "Erro ao deletar" });
    }
  };

  searchPersonagemController = async (req, res) => {
    try {
      const name = req.query.name;

      const searchedPersonagem = await personagemServices.searchPersonagemService(
        name
      );
      if (!searchedPersonagem) {
        res.status(404).send({ message: "Nome não encontrado" });
      } else {
        res.status(200).send(searchedPersonagem);
      }
    } catch (err) {
      res.status(404).send({ message: "Erro" });
    }
  };
}

module.exports = personagemControllers = new PersonagemControllers();