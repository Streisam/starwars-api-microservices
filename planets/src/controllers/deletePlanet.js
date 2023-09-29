const Planet = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const { id } = req.params;
    const planetDel = await Planet.delete(id);
    response(res, 204, planetDel);
};