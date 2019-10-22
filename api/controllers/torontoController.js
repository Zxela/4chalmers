'use-strict'

var mongoose = require('mongoose');
var TorontoMeals = mongoose.model('TorontoMeals');
var responses = require('../helpers/responseType')

exports.getMeals = function (req, res) {
    // Mongoose example
    TorontoMeals.find({}, function (err, meals) {
        if (err) {
            res.send(err)
        }
        responses.mealResponse(res, 200, "Here are the available meals", meals)
    })
}
exports.getClothing = function (req, res) {
    // JSON Example
    var clothing = require('../resources/Canada/Ontario/Toronto/clothing.json')
    
    responses.clothingResponse(res, 200, "Here are spaces offering free clothing", "data")
}