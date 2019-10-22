'use-strict'

/** 
 * Register Routes 
 */
module.exports = function (app) {


  // Home Page
  app.route('/')
    .get(function (req, res, next) {
      res.render('index', {});
    })

  /** 
   * API Routes
   */
  app.route('/api')
    .get(() => {
      console.log("hello")
    })

  // CSV Example
  app.route('/api/Toronto')
  // JSON Example
  app.route('/api/Barrie')
  // Mock API Example
  app.route('/api/London')
  // SQL Example
  app.route('/api/Mississauga')

}