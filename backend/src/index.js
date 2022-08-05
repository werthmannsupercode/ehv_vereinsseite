const morgan = require("morgan")
const express = require("express")
const cors = require("cors")
const { artikelRouter } = require("./routes/artikel-router")
const { emailRouter } = require("./routes/email-router")

const PORT = process.env.PORT || 9000
const app = express()


app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.get("/", (_, res) => res.send("it works :)"))

app.use("/articles", artikelRouter)
app.use("/kontaktanfragen", emailRouter)

app.use((_, res) => {
    res.status(404).json({ error: "Not found" })
})

app.listen(PORT, () => console.log("listening on port " + PORT))