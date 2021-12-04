const express = require('express');
const router = express.Router();
const ctrlTrip = require("../controllers/trips");

/* GET home page. */
router.get('/trips', ctrlTrip.tripsList);
router.get('/trips/:tripCode', ctrlTrip.tripsFindByCode);

module.exports = router;