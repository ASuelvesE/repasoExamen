import Estudiante from "../../../models/Estudiante";


export default interface IEstudiantesRepository{
    findAll() : Promise<Estudiante[]>;
    findByName(nombre: String) : Promise<Estudiante>;
    findByIdAndCurso(idEstudiante:Number,curso: String) : Promise<Estudiante>;
    save(estudiante: Estudiante) : Promise<Estudiante>;
}