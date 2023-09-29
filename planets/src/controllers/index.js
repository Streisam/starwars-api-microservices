const { catchedAsync } = require('../utils');

module.exports = {
    getPlanets: catchedAsync(require('./getPlanets')),
    getPlanetById: catchedAsync(require('./getPlanetById')),
    createFilm: catchedAsync(require('./createPlanet')),
    deleteFilm: catchedAsync(require('./deletePlanet')),
    editFilm: catchedAsync(require('./editPlanet')),

};