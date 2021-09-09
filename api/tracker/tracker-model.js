const db = require('../../database/db-config');

const find = () => {
    return db('tracker')
};

const findById = (id) => {
    return db('tracker').where({ "id": id }).first()
};

async function addUser(body) {
    return await db('tracker').insert(body).returning("*");
}

async function updateById(id, body) {
    return await db('tracker').where({ id }).update(body).returning("*");
}

module.exports = {
    find,
    findById,
    addUser,
    updateById
}