const router = require('express').Router();
const Tracker = require('./tracker-model');

router.get('/', (req, res, next) => {
    Tracker.find()
        .then((users) => {
            res.status(200).json(users)
        })
        .catch(next);
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    Tracker.findById(id)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch(next);
});


router.post('/', (req, res, next) => {
    Tracker.addUser(req.body)
        .then((user) => {
            res.status(201).json({ message: "New user has been created sucessfully!", user });
        })
        .catch(next);
});

router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    Tracker.updateById(id, body)
        .then((user) => {
            res.status(200).json({ message: "User has been updated", user });
        })
        .catch(next);
});

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    Tracker.deleteById(id)
        .then((user) => {
            res.status(200).json({ message: "User deleted succesfully", user });
        })
        .catch(next);
});

router.get('/steam_id/:steam_id', (req, res, next) => {
    const { steam_id } = req.params;
    Tracker.findBySteamId(steam_id)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch(next);
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(req.status || 500).json({
        message: 'Something went wrong in the aplication.',
        error: err.message,
        stack: err.stack,
        err: err,
    })
});

module.exports = router;