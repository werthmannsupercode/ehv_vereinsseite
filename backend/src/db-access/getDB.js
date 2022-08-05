const dotenv = require("dotenv")
const { MongoClient } = require('mongodb');

dotenv.config()

const url = process.env.DB_URL
const client = new MongoClient(url)

let _db;

async function getDB() {
    if (_db) {
        return _db
    }

    const connectedClient = await client.connect()
    const db = connectedClient.db(process.env.DB_NAME)
    _db = db; //
    return _db
}

module.exports = {
    getDB
}