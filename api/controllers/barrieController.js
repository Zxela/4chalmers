'use-strict'
var responses = require('../helpers/responseType')
var fs = require('fs')


exports.getMeals = function (req, res) {
    // mock api example 
    function mockCall() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([{
                        "id": 1,
                        "service_name": "Home Ing",
                        "available": true
                    },
                    {
                        "id": 2,
                        "service_name": "Bitwolf",
                        "available": true
                    }, {
                        "id": 3,
                        "service_name": "Otcom",
                        "available": true
                    }
                ])
            }, 3000)
        })
    }
    async function callApi() {
        var data = await mockCall()
        responses.mealResponse(res, 200, data)
    }
    callApi()

}
exports.getClothing = function (req, res) {
    // csv example

    responses.clothingResponse(res, 200, "data")

}