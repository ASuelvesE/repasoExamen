
import { executeQuery } from '../../../db/mysql/mysql.connector'
import Estudiante from '../../../models/Estudiante';
import Modulo from '../../../models/Modulo';
import IModulosRepository from './imodulos';


export default class ModulosRepositoryMySQL implements IModulosRepository {


    async findAll(): Promise<Modulo[]> {
        const sql = `select * from modulos`;
        try {
            const modulos: Modulo[] = await executeQuery<Modulo[]>(sql)
            return modulos;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
    async findByIdAndCurso(idModulo: Number, curso: String): Promise<Modulo> {
        const sql = `select m.nombre, me.curso ,e.id as idAlumno, e.nombre as alumno
        from modulos m 
        join modulos_estudiantes me on me.id_modulo = m.id 
        JOIN estudiantes e on e.id = me.id_estudiante 
        where me.curso = '${curso}'
        and m.id = ${idModulo}`;
        try {
            const matriculasDB: any = await executeQuery<Modulo[]>(sql);
            const estudiantes: Estudiante[] = [];
            for(let matricula of matriculasDB){
                estudiantes.push(new Estudiante(matricula.idAlumno,matricula.alumno,undefined,undefined));
            }
            const matriculados: Modulo = new Modulo(idModulo,matriculasDB[0].nombre,estudiantes,curso,undefined);
            return matriculados;
        } catch (error) {
            console.error(error);
            return new Modulo(0,"",undefined,undefined,undefined);
        }
    }
    async findCalificacionesByIdAndCurso(idModulo: Number, curso: String): Promise<Modulo> {
        const sql = `select m.nombre, me.curso,me.calificacion ,e.id as idAlumno, e.nombre as alumno
        from modulos m 
        join modulos_estudiantes me on me.id_modulo = m.id 
        JOIN estudiantes e on e.id = me.id_estudiante 
        where me.curso = '${curso}'
        and m.id = ${idModulo}`;
        try {
            const matriculasDB: any = await executeQuery<Modulo[]>(sql);
            const estudiantes: Estudiante[] = [];
            for(let matricula of matriculasDB){
                estudiantes.push(new Estudiante(matricula.idAlumno,matricula.alumno,undefined,matricula.calificacion));
            }
            const matriculados: Modulo = new Modulo(idModulo,matriculasDB[0].nombre,estudiantes,curso,undefined);
            return matriculados;
        } catch (error) {
            console.error(error);
            return new Modulo(0,"",undefined,undefined,undefined);
        }
    }
    async findCalificacionByEstudianteAndCurso(idEstudiante: Number, curso: String): Promise<Modulo[]> {
        const sql = `select * from modulos`;
        try {
            await executeQuery<Modulo[]>(sql)
            return this.findAll();
        } catch (error) {
            console.error(error);
            return [];
        }
    }
    async save(modulo: Modulo): Promise<Modulo[]> {
        const sql = `insert into modulos (nombre) values('${modulo.nombre}')`;
        try {
            await executeQuery<Modulo[]>(sql)
            return this.findAll();
        } catch (error) {
            console.error(error);
            return [];
        }
    }
    async addEstudiantesByIdAndCurso(idModulo: Number, curso: String, idEstudiantes: Number[]): Promise<Modulo[]> {
        try {
            for (let idEstudiante of idEstudiantes) {
                const sql = `insert into modulos_estudiantes values (${idModulo},${idEstudiante},'${curso}',0)`;
                await executeQuery<Modulo[]>(sql)
            }
            return this.findAll();
        } catch (error) {
            console.error(error);
            return [];
        }

    }
    async addCalificationByIdAndCurso(idModulo: Number, curso: String, idEstudiante: Number, calificacion: Number): Promise<Modulo[]> {
        const sql = `update modulos_estudiantes 
        set calificacion = ${calificacion}
        where id_modulo = ${idModulo} 
        and id_estudiante = ${idEstudiante} 
        and curso = '${curso}';`;
        try {
            await executeQuery<Modulo[]>(sql)
            return this.findAll();;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

}
