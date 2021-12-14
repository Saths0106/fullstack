const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});
const authController = require('../controllers/authentication');
const ctrlTrip = require("../controllers/trips");


router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

/* GET home page. */
router
    .route('/trips')
    .get(ctrlTrip.tripsList)
    .post(auth.tripsAddTrip);
router
    .route('/trips/:tripCode')
    .get(ctrlTrip.tripsFindByCode)
    .put(auth.tripsUpdateTrip);

module.exports = router;