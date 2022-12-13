
import { executeQuery } from '../../../db/mysql/mysql.connector'
import Estudiante from '../../../models/Estudiante';
import Modulo from '../../../models/Modulo';
import IEstudiantesRepository from './Iestudiantes';


export default class EstudiantesRepositoryMySQL implements IEstudiantesRepository {

    async findAll(): Promise<Estudiante[]> {
        const sql: string = `select * FROM estudiantes`
        try {
            const data: Estudiante[] = await executeQuery<Estudiante[]>(sql)
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
    async findByName(nombre: String): Promise<Estudiante> {
        const sql: string = `select * FROM estudiantes where nombre = '${nombre}'`
        try {
            const data: any = await executeQuery<Estudiante[]>(sql)
            return new Estudiante(data[0].id,data[0].nombre,undefined,undefined);
        } catch (error) {
            console.error(error);
            return new Estudiante(0,"",[],undefined);
        }
    }
    async findByIdAndCurso(idEstudiante:Number,curso: String): Promise<Estudiante> {
        const sql: string = `select m.id,m.nombre, me.calificacion,me.curso,e.id as idAlumno, e.nombre as alumno
        from modulos m 
        join modulos_estudiantes me on me.id_modulo = m.id 
        JOIN estudiantes e on e.id = me.id_estudiante 
        where me.curso = '${curso}'
        and e.id = ${idEstudiante}`
        try {
            const matriculaciones: any[] = await executeQuery<Estudiante[]>(sql);
            const modulos: Modulo[] = [];
            for(let matriculacion of matriculaciones){
                modulos.push(new Modulo(matriculacion.id,matriculacion.nombre,undefined,curso,matriculacion.calificacion))
            }
            const estudiante: Estudiante = new Estudiante(idEstudiante,matriculaciones[0].alumno,modulos,undefined);
            return estudiante;
        } catch (error) {
            console.error(error);
            return new Estudiante(0,"",[],undefined);
        }
    }
    async save(estudiante: Estudiante): Promise<Estudiante> {
        const sql: string = `insert into estudiantes (nombre) values ("${estudiante.nombre}")`
        try {
            await executeQuery<Estudiante[]>(sql)
            const estudianteNuevo: Estudiante = await this.findByName(String(estudiante.nombre));
            return estudianteNuevo;
        } catch (error) {
            console.error(error);
            return new Estudiante(0,"",[],undefined);
        }
    }

}
