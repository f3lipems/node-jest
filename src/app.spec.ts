import request from 'supertest'
import { App } from './app'

describe('First test', () => {
    const app = new App().app

    it('shoud test if the server is running', async () => {
        const response = await request(app).get('/')
        expect(response.body).toStrictEqual({ ok: true })
    })
})