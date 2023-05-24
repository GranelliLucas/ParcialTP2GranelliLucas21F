import fs from 'fs'

class ModelFile {

    constructor() {
        this.nombreArchivo = 'notas.json'
    }

    leerArchivo = archivo => {
        try{
            const notas = JSON.parse(fs.readFileSync(archivo, 'utf-8'))
            return notas
        }catch{
            return[]
        }
    }

    obtenerNotas = () => {
        return this.leerArchivo(this.nombreArchivo)
    }

    guardarNota = (nota) => {
        const notas = this.leerArchivo(this.nombreArchivo)
        notas.notas.push(Number(nota.nota))
        console.log(notas)
    
        fs.writeFileSync(this.nombreArchivo, JSON.stringify(notas))
    
        return nota
    }

}

export default ModelFile