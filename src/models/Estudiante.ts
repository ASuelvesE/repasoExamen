import Modulo from "./Modulo";


export default class Estudiante {

    id: Number
    nombre: String
    modulos: Modulo[] | undefined

    constructor(id: Number, nombre: String, modulos: Modulo[] | undefined){
        this.id = id;
        this.nombre = nombre;
        this.modulos = modulos;
    }
}