'use-strict'

module.exports = function (app) {
  var toronto = require('../controllers/torontoController');
  var barrie = require('../controllers/barrieController')

  // /meals
  // app.route('/api/meals/toronto')
  //   .get(toronto.getMeals)
  app.route('/api/meals/barrie')
    .get(barrie.getMeals)

  // /clothing
  app.route('/api/clothing/toronto')
    .get(toronto.getClothing)
  app.route('/api/clothing/barrie')
    .get(barrie.getClothing)

}