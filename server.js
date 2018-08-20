// Require necessary packages.
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

// Access styles.
app.use(express.static(path.join(__dirname, './app/public')));


// Parse incoming request body.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());

// App routes.
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Port listener.
app.listen(PORT, function () {
    console.log('Friend Finder app is listening on PORT: ' + PORT);
});