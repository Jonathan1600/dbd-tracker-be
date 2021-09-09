const db = require('../../database/db-config');

const find = () => {
    return db('tracker');
}

const findById = (id) => {
    return db('tracker').where({ id }).first();
}

async function addUser(body) {
    return await db('tracker').insert(body).returning("*");
}

async function updateById(id, body) {
    return await db('tracker').where({ id }).update(body).returning("*");
}

async function deleteById(id) {
    return await db('tracker').where({ id }).delete().returning("*");
}

async function findBySteamId(steam_id) {
    return await db('tracker').where({ steam_id }).first();
}

async function updateBySteamId(steam_id, body) {
    return await db('tracker').where({ steam_id }).update(body).returning("*");
}

module.exports = {
    find,
    findById,
    addUser,
    updateById,
    deleteById,
    findBySteamId,
    updateBySteamId
}