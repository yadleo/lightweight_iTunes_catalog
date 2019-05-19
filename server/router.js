const router = require('express').Router();
const controller = require('./controller');

router.route('/searchItunes').get(controller.read);

module.exports = { router };
