const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const trackerRouter = require('./tracker/tracker-router.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/tracker', trackerRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "Online" });
});

module.exports = server