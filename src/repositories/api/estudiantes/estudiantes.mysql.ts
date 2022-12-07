
import { executeQuery } from '../../../db/mysql/mysql.connector'
import Estudiante from '../../../models/Estudiante';
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
    async findById(id: Number): Promise<Estudiante> {
        const sql: string = `select * FROM estudiantes where id = ${id}`
        try {
            const data: Estudiante[] = await executeQuery<Estudiante[]>(sql)
            return data[0];
        } catch (error) {
            console.error(error);
            return new Estudiante(0,"",[]);
        }
    }
    async save(estudiante: Estudiante): Promise<Estudiante> {
        const sql: string = `insert into estudiantes (nombre) values ("${estudiante.nombre}")`
        try {
            await executeQuery<Estudiante[]>(sql)
            return await this.findById(Number(estudiante.id));
        } catch (error) {
            console.error(error);
            return new Estudiante(0,"",[]);
        }
    }

}
