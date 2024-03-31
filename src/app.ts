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
        const users: any = []

        this.app.get('/', (req, res: any) => {
            return res.json({ ok: true })
        })

        this.app.post('/user', (req, res: any) => {
            const { email, password, name } = req.body
            const id = crypto.randomUUID()
            const data = { id, email, password, name }
            users.push(data)

            return res.status(201).json(data)
        })

        this.app.get('/users', (req, res: any) => {
            return res.status(200).json(users)
        })

    }

    listen(port: number) {
        this.app.listen(port, () => {
            console.log('Server is running...')
        })
    }
}

export { App } 