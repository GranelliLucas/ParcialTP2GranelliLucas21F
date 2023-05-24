import Model from "../model/notas-model.js"

class Service {

    constructor(){
        this.model = new Model()
    }

    obtenerNotas = () => {
        const notas = this.model.obtenerNotas()
        return notas
    }
    
    obtenerPromedio = () => {
        const notas = this.model.obtenerNotas().notas
        const promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;
		return {promedio}
    }

    obtenerMinMax = () => {
        const notas = this.model.obtenerNotas().notas
        const min = Math.min(...notas);
        const max = Math.max(...notas);
        return {min, max}
    }
    
    obtenerCantidad = () => {
        const notas = this.model.obtenerNotas().notas
        return {cantidad: notas.length}
    }

    guardarNota = (nota) => {
        return  this.model.guardarNota(nota)
    }
}


export default Service