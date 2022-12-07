import Estudiante from "./Estudiante";


export default class Modulo {

    id: Number
    nombre: String
    estudiantes: Estudiante[] | undefined
    calificacion: Number | undefined
    curso: String | undefined

    constructor(id: Number, nombre: String,estudiantes: Estudiante[] | undefined,calificacion: Number | undefined,curso: String | undefined){
        this.id = id;
        this.nombre = nombre;
        this.estudiantes = estudiantes;
        this.calificacion = calificacion;
        this.curso = curso;
    }
}