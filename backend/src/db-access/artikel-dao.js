const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

const artikelCollectionName = "artikelCollection"

async function findAll() {
    const db = await getDB()
    const artikels = await db.collection(artikelCollectionName).find().toArray()
    return artikels
}

async function insertOne(artikelInfo) {
    const db = await getDB()
    return db.collection(artikelCollectionName).insertOne(artikelInfo)
}

module.exports = {
    findAll,
    insertOne
}