const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();

router.get("/", controllers.getCharacters);

router.get("/:id", middlewares.idValidation, controllers.getCharacterById);

router.post("/", middlewares.characterValidation, controllers.createCharacter);

router.delete("/:id", middlewares.idValidation, controllers.deleteCharacter);

router.put("/:id", middlewares.idValidation, controllers.editCharacter);

module.exports = router;