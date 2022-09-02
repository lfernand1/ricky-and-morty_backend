const router = require("express").Router();
const personagemControllers = require("./personagem.controller");
const authMiddleware = require("../auth/auth.middleware");

router.get(
  "/search",
  authMiddleware,
  personagemControllers.searchPersonagemController
);
router.post(
  "/create",
  authMiddleware,
  personagemControllers.createPersonagemController
);
router.get(
  "",
  authMiddleware,
  personagemControllers.getAllPersonagemController
);
router.get(
  "/find/:id",
  authMiddleware,
  personagemControllers.findByIdController
);
router.put(
  "/update/:id",
  authMiddleware,
  personagemControllers.updatePersonagemController
);
router.delete(
  "/delete/:id",
  authMiddleware,
  personagemControllers.deletePersonagemController
);
module.exports = router;
