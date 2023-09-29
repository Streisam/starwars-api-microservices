const { ClientError } = require('../utils/errors');

module.exports = (req, res, next) => {
    const { id } = req.params;
    const idPattern = /^\d+$/;
    if(idPattern.test(id)) return next();
    else throw new ClientError("Error, id needs to be a number", 401);
}