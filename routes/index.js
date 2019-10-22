'use-strict'

module.exports = function (app) {
  var Toronto = require('../controllers/torontoController');
  var Barrie = require('../contollers/barrieController')

  // Home Page
  app.route('/')
    .get(function (req, res, next) {
      res.render('index', {});
    })

  app.route('/api/Toronto/clothing')
    .get(Toronto.getClothing)
  app.route('/api/Toronto/meal')
    .get(Toronto.getMeal)
  app.route('/api/Barrie/clothing')
    .get(Barrie.getClothing)
  app.route('/api/Barrie/meal')
    .get(Barrie.getMeal)

}