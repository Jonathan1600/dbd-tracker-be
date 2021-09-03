const db = require('../../database/db-config');

const find = () => {
    return db('tracker')
};

const findById = (id) => {
    return db('tracker').where({ "user_id": id }).first()
};

module.exports = {
    find,
    findById
}