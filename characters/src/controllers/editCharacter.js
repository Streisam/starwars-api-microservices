const Character = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
    // console.log(data);
    const { id } = req.params;
    const newCharacter = await Character.edit(id, req.body);
    response(res, 201, newCharacter);
};