import express from 'express'

class App {
    private app: express.Application

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
        this.app.use('/', (res: any) => {
            return res.json({ ok: true })
        })
    }

    listen(port: number) {
        this.app.listen(port, () => {
            console.log('Server is running...')
        })
    }
}

export { App }