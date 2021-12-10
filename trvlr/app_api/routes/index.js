const express = require('express');
const router = express.Router();
const ctrlTrip = require("../controllers/trips");

/* GET home page. */
router
    .route('/trips')
    .get(ctrlTrip.tripsList)
    .post(ctrlTrip.tripsAddTrip);
router
    .route('/trips/:tripCode')
    .get(ctrlTrip.tripsFindByCode)
    .put(ctrlTrip.tripsUpdateTrip);

module.exports = router;