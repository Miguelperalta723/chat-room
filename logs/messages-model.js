const db = require('../data/dbConfig.js')

module.exports = {
    find,
    insert
}

function find() {
    return db('messages');
}

function insert(message) {
    return db('messages').insert(message)
}