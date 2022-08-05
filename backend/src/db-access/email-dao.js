const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

function addNewRequestToDB(request) {
    return new Promise((resolve, reject) => {
        getDB()
            .then(db => db.collection("anfragenCollection").insertOne(request))
            .then(result => {
                if (result.acknowledged === true && result.insertedId) {
                    return resolve({
                        _id: result.insertedId,
                        ...request,
                    })
                } else {
                    return reject(result)
                }
            }).catch((err) => reject(err))
    })
}

module.exports = {
    addNewRequestToDB
}