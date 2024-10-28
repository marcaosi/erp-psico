const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

const routes = require("./src/routes")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("API running");
})

routes.forEach(route => {
    app.use(route)
})

app.listen(PORT, () => {
    console.log("Service running on " + PORT)
})