var path = require('path');

// Export HTML routes.
module.exports = (app) => {

    // Home.
    app.get('/' = (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // Survey.
    app.get('/survey' = (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};