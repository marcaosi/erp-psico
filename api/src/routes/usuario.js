const express = require('express')
const router = express.Router()
const {Usuario} = require("../models")

router.get("/usuario", (req, res) => {
    const usuarios = Usuario.findAll()

    // Filtros: nome, e-mail
    // Paginação

    res.send(usuarios)
})

router.get("/usuario/:id", async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id)

    if(usuario){
        return res.status(200)
           .setHeader('Content-Type', 'application/json')
           .send(usuario)
    }else{
        return res.status(404).end()
    }

})

router.post("/usuario", async (req, res) => {
    const usuario = {
        ...req.body,
        troca_senha: 0
    }

    const usuarioSalvo = await Usuario.create(usuario)
    
    res.setHeader('Content-Type', 'application/json')
       .status(201)
       .send({
            success: true,
            id: usuarioSalvo.id
       })
})

router.put("/usuario/:id", (req, res) => {

})

router.delete("/usuario/:id", (req, res) => {

})

module.exports = router