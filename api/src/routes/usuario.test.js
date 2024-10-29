const app = require("../app")
const request = require("supertest")

describe('POST /usuario', () => {
    it('Criando um novo usuário válido', async () => {
        const usuario = {
            nome: 'Novo Usuário',
            email: 'usuario@mail.com',
            senha: '123456',
            telefone: '(35) 99999-9999'
        }
    
        const response = await request(app).post('/usuario')
            .send(usuario)
            .expect('Content-Type', /json/)
            .expect(201)
    
        expect(response.body.success).toBeTruthy()

        const {id} = response.body

        const responseGet = await request(app).get(`/usuario/${id}`)
            .expect('Content-Type', /json/)
            .expect(200)

        const usuarioBuscado = responseGet.body

        expect(usuarioBuscado.nome).toBe(usuario.nome)
        expect(usuarioBuscado.email).toBe(usuario.email)
        expect(usuarioBuscado.telefone).toBe(usuario.telefone)
        expect(usuarioBuscado.senha).toBeFalsy()
        expect(usuarioBuscado.id).toBe(id)
    })

    // it('Tentando criar um usuário sem nome', async() => {
    //     const usuario = {
    //         email: 'usuario@mail.com',
    //         senha: '123456',
    //         telefone: '(35) 99999-9999'
    //     }
    
    //     const response = await request(app).post('/usuario')
    //         .send(usuario)
    //         .expect('Content-Type', /json/)
    //         .expect(400)
    
    //     expect(response.body.success).toBeFalsy()
    //     expect(response.body.message).toBe('Campo nome é obrigatório.')
    // })

    // it('Tentando criar um usuário sem e-mail', async() => {
    //     const usuario = {
    //         nome: 'usuário novo',
    //         senha: '123456',
    //         telefone: '(35) 99999-9999'
    //     }
    
    //     const response = await request(app).post('/usuario')
    //         .send(usuario)
    //         .expect('Content-Type', /json/)
    //         .expect(400)
    
    //     expect(response.body.success).toBeFalsy()
    //     expect(response.body.message).toBe('Campo nome é obrigatório.')
    // })

    // it('Tentando criar um usuário com e-mail inválido', async() => {
    //     const usuario = {
    //         email: 'usuario',
    //         senha: '123456',
    //         telefone: '(35) 99999-9999',
    //         nome: 'usuario novo'
    //     }
    
    //     const response = await request(app).post('/usuario')
    //         .send(usuario)
    //         .expect('Content-Type', /json/)
    //         .expect(400)
    
    //     expect(response.body.success).toBeFalsy()
    //     expect(response.body.message).toBe('Campo email deve ser um e-mail válido.')
    // })

    // it('Tentando criar um usuário sem telefone', async() => {
    //     const usuario = {
    //         email: 'usuario@mail.com',
    //         senha: '123456',
    //         nome: 'Usuario novo'
    //     }
    
    //     const response = await request(app).post('/usuario')
    //         .send(usuario)
    //         .expect('Content-Type', /json/)
    //         .expect(400)
    
    //     expect(response.body.success).toBeFalsy()
    //     expect(response.body.message).toBe('Campo telefone é obrigatório.')
    // })

    // it('Tentando criar um usuário sem senha', async() => {
    //     const usuario = {
    //         email: 'usuario@mail.com',
    //         nome: 'Usuário novo',
    //         telefone: '(35) 99999-9999'
    //     }
    
    //     const response = await request(app).post('/usuario')
    //         .send(usuario)
    //         .expect('Content-Type', /json/)
    //         .expect(400)
    
    //     expect(response.body.success).toBeFalsy()
    //     expect(response.body.message).toBe('Campo senha é obrigatório.')
    // })
})
