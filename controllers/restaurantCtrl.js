const restaurantDetails = require('../models/restaurantdata.json');
const mealdata = require("../models/mealtype.json")

const locationName = (req, res) => {
    const result = restaurantDetails.map((item) => item)
    res.send(result)
}

const mealtype = (req, res) => {
    const response = mealdata.map((item) => item)
    res.send(response)
}


module.exports = { locationName, mealtype }