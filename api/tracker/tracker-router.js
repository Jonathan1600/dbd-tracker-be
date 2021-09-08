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
            res.status(201).json({ Message: "New user has been created sucessfully!", user });
        })
        .catch(next);
});

router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const { body } = req.params;
    Tracker.updateById(id, body)
        .then((newUser) => {
            res.status(200).json({ Message: "User has been updated", newUser });
        })
        .catch(next);
});

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    Tracker.deleteById(id)
        .then((userDeleted) => {
            res.status(200).json({ Message: "User deleted succesfully", userDeleted });
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