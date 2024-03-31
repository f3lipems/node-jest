import express, { Application } from 'express'
import crypto from 'crypto'

class App {
    public app: Application

    constructor() {
        this.app = express()
        this.config()
        this.routes()
    }

    config() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    routes() {
        this.app.get('/', (req, res: any) => {
            return res.json({ ok: true })
        })

        this.app.post('/user', (req, res: any) => {
            const { email, password, name } = req.body
            const id = crypto.randomUUID()
            const data = { id, email, password, name }

            return res.status(201).json(data)
        })
    }

    listen(port: number) {
        this.app.listen(port, () => {
            console.log('Server is running...')
        })
    }
}

export { App } 