const mongoose = require('mongoose'); //.set(debug,true);
const Model = mongoose.model('trips');

// GET: /trips - list all of the trips
const tripsList = async (req, res) => {
    Model.find({}) //empty filter for all
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({ "Message": "trips not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

// GET /trips/:tripCode - returns a single trip
const tripsFindByCode = async (req, res) => {
    Model.find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({ "Message": "trips not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

module.exports = {
    tripsList,
    tripsFindByCode
};
