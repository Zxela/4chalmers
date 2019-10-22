'use-strict'

module.exports = function (app) {
  var barrie = require('../controllers/barrieController')
  var toronto = require('../controllers/torontoController');

  // /barrie
  app.route('/barrie/meals')
    .get(barrie.getMeals)
  app.route('/barrie/clothing')
    .get(barrie.getClothing)

  // /toronto
  app.route('/toronto/clothing')
    .get(toronto.getClothing)
  app.route('/toronto/meals')
    .get(toronto.getMeals) // example fetch from DB 

  // example CRUD operations
    .post(toronto.createMeal)
  app.route('/toronto/meals/:mealId')
    .get(toronto.getMeal)
    .put(toronto.updateMeal)
    .delete(toronto.deleteMeal)
}