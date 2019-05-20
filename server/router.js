const router = require('express').Router();
const controller = require('./controller');

router.route('/itunesCatalog/search').get(controller.read);

module.exports = { router };
