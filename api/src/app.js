const express = require("express")
const app = express()

const routes = require("./routes")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("API running");
})

routes.forEach(route => {
    app.use(route)
})

module.exports = app