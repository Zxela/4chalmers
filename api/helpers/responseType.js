'use-strict'

exports.mealResponse = function (res, status, data) {
    var response = {
        statusCode: status,
        message: "Here are the available meals",
        data: data,
    }
    res.status(200).send(response)
}

exports.clothingResponse = function (res, status, data) {
    var response = {
        statusCode: status,
        message: "Here are spaces offering free clothing",
        data: data,
    }
    res.status(200).send(response)
}