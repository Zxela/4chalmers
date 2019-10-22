'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TorontoMealSchema = new Schema({
    name: {
        type: String,
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum:['ongoing','completed']
        }],
        default: ['ongoing']
    }
})

module.exports = mongoose.model('TorontoMeals', TorontoMealSchema);