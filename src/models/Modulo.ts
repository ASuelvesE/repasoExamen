import Estudiante from "./Estudiante";


export default class Modulo {

    id: Number
    nombre: String
    estudiantes: Estudiante[] | undefined
    curso: String | undefined
    calificacion: Number | undefined

    constructor(id: Number, nombre: String,estudiantes: Estudiante[] | undefined,curso: String | undefined, calificacion: Number | undefined){
        this.id = id;
        this.nombre = nombre;
        this.estudiantes = estudiantes;
        this.curso = curso;
        this.calificacion = calificacion;
    }
}