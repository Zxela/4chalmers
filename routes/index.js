'use-strict'

module.exports = function (app) {
  // Register Routes
  
  // Home Page
  get('/', function(req, res, next) {
    res.render('index', { title: 'Sample API Server' });
  })

  // API Routes
  
  app.route('/api')
    .get(() => {console.log("hello")})
}