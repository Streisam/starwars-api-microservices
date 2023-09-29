const { catchedAsync } = require('../utils');

module.exports = {
    getCharacters: catchedAsync(require('./getCharacters')),
    getCharacterById: catchedAsync(require('./getCharacterById.js')),
    createCharacter: catchedAsync(require('./createCharacter')),
    deleteCharacter: catchedAsync(require('./deleteCharacter')),
    editCharacter: catchedAsync(require('./editCharacter')),
};