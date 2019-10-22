'use-strict'

var mongoose = require('mongoose');
var TorontoMeal = mongoose.model('TorontoMeals');
var responses = require('../helpers/responseType')

exports.getClothing = function (req, res) {
    // JSON Example
    var clothing = require('../resources/Canada/Ontario/Toronto/clothing.json')
    
    responses.clothingResponse(res, 200,  "data")
}

exports.getMeals = function (req, res) {
    // Mongoose example
    TorontoMeal.find({}, function (err, meals) {
        if (err) {
            res.send(err)
        }
        responses.mealResponse(res, 200, "Here are the available meals", meals)
    })
}

// EXAMPLE CRUD OPERATIONS
exports.createMeal = function (req, res) {
    var newMeal = new TorontoMeal(req.body);
    newMeal.save(function (err, meal) {
        if (err)
            res.send(err);
        res.json(meal);
    })
}

exports.getMeal = function (req, res) {
    TorontoMeal.findById(req.params.mealId, function (err, meal) {
        if (err)
            res.send(err);
        res.json(meal)
    })
}

exports.updateMeal = function (req, res) {
    TorontoMeal.findOneAndUpdate({
        _id: req.params.mealId
    }, req.body, {
        new: true
    }, function (err, meal) {
        if (err)
            res.send(err);
        res.json(meal)
    })
}

exports.deleteMeal = function (req, res) {
    TorontoMeal.remove({
        _id: req.params.mealId
    }, function (err, meal) {
        if (err)
            res.send(err);
        res.json({
            message: 'Meal successfully deleted'
        });
    })
}


