import express from 'express'
import Controller from '../controller/notas-controller.js'

class Router {

    constructor(){
        this.router = express.Router()
        this.controller = new Controller()
    }

    start(){
        this.router.get('/listado', this.controller.obtenerNotas)
        this.router.get('/promedio', this.controller.obtenerPromedio)
        this.router.get('/minmax', this.controller.obtenerMinMax)
        this.router.get('/cantidad', this.controller.obtenerCantidad)
        this.router.post('/ingreso', this.controller.guardarNota)

        return this.router
    }
}

export default Router