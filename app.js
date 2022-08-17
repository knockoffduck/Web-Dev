const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static("Web Dev"));

app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/Web Dev/index.html'));
});

app.listen(port, () => console.log("Listening on port" + port));