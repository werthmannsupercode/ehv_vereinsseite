const express = require("express")
const { addArtikel } = require("../use-cases/add-artikel")

const artikelRouter = express.Router()

// shopRouter.get("/allproducts", (_, res) => {
//     showProducts()
//         .then(products => res.json(products))
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({ error: "Failed to load products from database." })
//         })
// })

// shopRouter.delete("/deleteproduct/:id", (req, res) => {
//     const productId = req.params.id
//     deleteProduct(productId)
//         .then(removedProduct => res.json(removedProduct))
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({ error: "Failed to remove product." })
//         })
// })

artikelRouter.post("/neuenBeitraghinzufuegen", async (req, res) => {
    if (!req.body) {
        res.status(400).json({ error: "Please include content." })
        return;
    }

    const newArtikel = {
        title: req.body.title,
        subtitle: req.body.subtitle,
        author: req.body.author,
        publishedAt: Date.now(),
        description: req.body.description,
        content: req.body.content
    }

    try {
        const artikel = await addArtikel(newArtikel)
        res.status(201).json(artikel)

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Failed to add artikel to database." })
    }
})

// shopRouter.post("/admins", (req, res) => {
//     registerAdmin(req.body)
//         .then((admin) => res.json(admin))
//         .catch((err) => {
//             console.log(err)
//             res.status(500).json({ message: err.toString() || "Internal Server Error." })
//         })
// })

module.exports = {
    artikelRouter
}