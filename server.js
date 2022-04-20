const express = require('express');
const db = require ('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Use the routes
app.use(routes);

// Initialise the server to be listened on port 3001
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server is now running on port ${PORT}!
=====================
    Connected!!!
=====================
        `)
    });
});