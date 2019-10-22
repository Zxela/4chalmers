'use-strict'

exports.mealResponse = function (res, status, message, data) {
    var response = {
        statusCode: status,
        message: message,
        data: data,
    }
    res.status(200).send(response)
}

exports.clothingResponse = function (res, status, message, data) {
    var response = {
        statusCode: status,
        message: message,
        data: data,
    }
    res.status(200).send(response)
}