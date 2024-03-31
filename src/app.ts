import express, { Aplication } from 'express'

class App {
    public app: Aplication

    constructor() {
        this.app = express()
    }

    listen(port: number) {
        this.app.listen(port, () => {
            console.log('Server is running...')
            
        })
    }
}

export { App }