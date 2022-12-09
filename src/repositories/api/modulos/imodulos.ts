import Estudiante from "../../../models/Estudiante";
import Modulo from "../../../models/Modulo";


export default interface IModulosRepository{
    findAll() : Promise<Modulo[]>;
    findByIdAndCurso(idModulo:Number , curso: String ) : Promise<Modulo>;
    findCalificacionesByIdAndCurso(idModulo:Number , curso: String ) : Promise<Modulo>;
    findCalificacionByEstudianteAndCurso(idEstudiante:Number, curso: String) : Promise<Modulo[]>;
    save(modulo: Modulo) : Promise<Modulo[]>;
    addEstudiantesByIdAndCurso(idModulo:Number , curso: String, idEstudiantes: Number[]) : Promise<Modulo[]>;
    addCalificationByIdAndCurso(idModulo:Number, curso: String, idEstudiante: Number,calificacion: Number) : Promise<Modulo[]>;
}