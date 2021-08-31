const db = require('../../database/db-config');

const find = () => {
    return db('tracker')
};

module.exports = {
    find
}