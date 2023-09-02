const mealData = require('../models/mealModels')

const mealDataCtrl = async (req, res) => {
    let { value, page } = req.body

    const itemsperpage = 2;

    page = page ? page : 1


    let startIndex = itemsperpage * page - itemsperpage
    let endIndex = itemsperpage * page

    let payload = {}
    if (value) {
        payload["type.name"] = { $in: value.toLowerCase() }
    }
    const response = await mealData.find(payload)
    const filterdResponse = response.slice(startIndex, endIndex)
    res.send(filterdResponse)
}

module.exports = mealDataCtrl