const exp = require("express");
const routing = exp.Router();
const baseData = require('../../controller/startPoint')

routing.route('/').get(baseData)


module.exports = routing;
