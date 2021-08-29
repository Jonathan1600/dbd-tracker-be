require('dotenv').config();

const path = require('path');
const express = require('express');

const server = require('./api/server');

const port = process.env.PORT || 3000;

server.use(express.static(path.join(__dirname, 'client/dist')));

server.listen(port, () => {
    console.log('dbd tracking server is live on port: ' + port)
});