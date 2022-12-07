import Estudiante from "../../../models/Estudiante";


export default interface IEstudiantesRepository{
    findAll() : Promise<Estudiante[]>;
    findById(id:Number) : Promise<Estudiante>;
    save(estudiante: Estudiante) : Promise<Estudiante>;
}