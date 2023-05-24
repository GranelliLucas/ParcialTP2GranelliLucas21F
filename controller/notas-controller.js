import Service from '../service/notas-service.js'

class Controller {

    constructor() {
        this.service = new Service()
    }


    obtenerNotas = (req, res) => {
        const notas = this.service.obtenerNotas()
        res.json(notas)
    }
    
    obtenerPromedio = (req, res) => {
        const promedio = this.service.obtenerPromedio()
        res.json(promedio)
    }

    obtenerMinMax = (req, res) => {
        const minMax = this.service.obtenerMinMax()
        res.json(minMax)
    }

    obtenerCantidad = (req, res) => {
        const cantidad = this.service.obtenerCantidad()
        res.json(cantidad)
    }

    guardarNota = (req, res) => {
        const nota = req.body
        const nuevaNota = this.service.guardarNota(nota)
        res.json(nuevaNota)
    }


    //GET PRODUCTOS
    obtenerProductos = (req, res) => {
        const { id } = req.params
        const producto = this.service.obtenerProductos(id)
        res.json(producto)
    }

}

export default Controller