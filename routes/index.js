'use-strict'

module.exports = function (app) {
  var Toronto = require('../controllers/torontoController');
  var Barrie = require('../contollers/barrieController')

// /meals
  app.route('/api/meals/toronto')
    .get(Toronto.getMeals)
  app.route('/api/meals/barrie')
    .get(Barrie.getMeals)

// /clothing
  app.route('/api/clothing/toronto')
    .get(Toronto.getClothing)
  app.route('/api/clothing/barrie')
    .get(Barrie.getClothing)

}