import request from 'supertest'
import { App } from './app'

describe('First test', () => {
    const app = new App().app

    it('shoud test if the server is running', async () => {
        const response = await request(app).get('/')
        expect(response.body).toStrictEqual({ ok: true })
    })

    it('shoud check if created user', async () => {
        const response = await request(app).post('/user').send({
            name: 'Felipe',
            email: 'f3lipe.dev@gmail.com',
            password: '123'
        })
        expect(response.statusCode).toEqual(201)
        expect(response.body).toHaveProperty('id')
    })
    
    it('shoud check if get users', async () => {
        const response = await request(app).get('/users')
        expect(response.statusCode).toEqual(200)
    })
})