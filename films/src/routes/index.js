const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();

router.get("/", controllers.getFilms);

router.get("/:id", middlewares.idValidation, controllers.getFilmById);

router.post("/", middlewares.filmValidation, controllers.createFilm);

router.delete("/:id", middlewares.idValidation, controllers.deleteFilm);

router.put("/:id", middlewares.idValidation, controllers.editFilm);

module.exports = router;