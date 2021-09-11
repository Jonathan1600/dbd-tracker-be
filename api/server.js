const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const trackerRouter = require('./tracker/tracker-router.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api', trackerRouter);


server.get("/", (req, res) => {
    res.status(200).json({ api: "Online" });
});

server.use((req, res) => {
    res.status(404).json({
        error: 'Not found',
        message: 'Check the documentation for more information on the api ==> https://github.com/Jonathan1600/dbd-tracker-be'
    })
})
module.exports = server