/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Travler Getaways' });
};
module.exports = {
    index
};