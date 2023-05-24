import express from 'express'
import Router from './routes/notas-routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))
app.use('/notas', new Router().start())

const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(error.message))