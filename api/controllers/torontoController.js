'use-strict'

var clothing = require('../resources/Canada/Ontario/Toronto/clothing.json')

exports.getMeal = function (req, res) {
    // Mongoose example
}
exports.getClothing = function (req, res) {
    // JSON Example
    res.send(clothing)
}