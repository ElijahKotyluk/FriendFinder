const path = require('path');

// Import the list of friend entries
const friends = require('../data/friends.js');

// Export API routes
module.exports = (app) => {

    // Total list of friend entries
    app.get('/api/friends', = (req, res) => {
        res.json(friends);
    });

    // Add new friend entry
    app.post('/api/friends' = (req, res) => {
        let userInput = req.body;

        let userResponses = userInput.scores;

        // Compute best friend match
        let matchName = '';
        let matchImage = '';
        let totalDifference = 10000;

        // Examine all existing friends in the list
        for (let i = 0; i < friends.length; i++) {

            let diff = 0;
            for (let j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }

            // If lowest difference, record the friend match
            if (diff < totalDifference) {

                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        // Add new user
        friends.push(userInput);

        // Send appropriate response
        res.json({
            status: 'OK',
            matchName: matchName,
            matchImage: matchImage
        });
    });
};