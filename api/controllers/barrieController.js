'use-strict'
var responses = require('../helpers/responseType')


exports.getMeals = function (req, res) {
    // mock api example 
    responses.mealResponse(res, 200, "Here are the available meals", "data")
}
exports.getClothing = function (req, res) {
    // csv example
    const clothing = require('../resources/Canada/Ontario/Barrie/clothing.csv')
    responeses.clothingResponse(res, 200, "Here are spaces offering free clothing", "data")
}