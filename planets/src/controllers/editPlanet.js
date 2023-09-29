const Planet = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
    // console.log(data);
    const { id } = req.params;
    const newPlanet = await Planet.edit(id, req.body);
    response(res, 201, newPlanet);
};