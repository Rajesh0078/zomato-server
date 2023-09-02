const express = require("express")
const { locationName, mealtype } = require("../controllers/restaurantCtrl")
const mealDataCtrl = require("../controllers/mealtype")
const router = express.Router()



router.get("/", locationName)
router.get("/meal", mealtype)
router.get("/breakfast", locationName)
router.post("/mealdata", mealDataCtrl)





module.exports = router