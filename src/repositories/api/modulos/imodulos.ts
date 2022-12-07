import Estudiante from "../../../models/Estudiante";
import Modulo from "../../../models/Modulo";


export default interface IModulosRepository{
    findAll() : Promise<Modulo[]>;
    findByIdAndEstudiante(idEstudiante:Number, id:Number) : Promise<Modulo[]>;
    save(modulo: Modulo) : Promise<Modulo[]>;
    update(id:Number,estudiantes: Estudiante[]) : Promise<Modulo[]>;
    addCalification(id:Number,idEstudiantes: Number,calificacion: Number) : Promise<Modulo[]>;
    delete(id: Number) : Promise<Modulo[]>;
}