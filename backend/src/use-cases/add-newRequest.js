const { EmailDAO } = require("../db-access");

function neueAnfrage(request) {

    return EmailDAO.addNewRequestToDB(request)
}

module.exports = {
    neueAnfrage
}