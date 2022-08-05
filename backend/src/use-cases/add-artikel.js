const { ArtikelDAO } = require("../db-access");

async function addArtikel({ title, subtitle, publishedAt, author, description, content }) {

    const newArtikel = {
        title,
        subtitle,
        publishedAt,
        author,
        description,
        content
    }

    const insertResult = await ArtikelDAO.insertOne(newArtikel)
    // const artikelView = ({
    //     _id: insertResult.insertedId,
    //     title,
    //     subtitle,
    //     publishedAt,
    //     author,
    //     description,
    //     content
    // })

    return insertResult
}

module.exports = {
    addArtikel
}