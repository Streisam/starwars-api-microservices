const Character = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
    // console.log(data);
    const newCharacter = await Character.create(req.body);
    response(res, 201, newCharacter);
};