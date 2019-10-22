'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TorontoMealSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name'
    },
    available: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('TorontoMeals', TorontoMealSchema);