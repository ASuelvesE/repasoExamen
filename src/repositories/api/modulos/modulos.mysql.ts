
import { executeQuery } from '../../../db/mysql/mysql.connector'
import Estudiante from '../../../models/Estudiante';
import Modulo from '../../../models/Modulo';
import IModulosRepository from './imodulos';


export default class ModulosRepositoryMySQL implements IModulosRepository {
    async findAll(): Promise<Modulo[]> {
        throw new Error('Method not implemented.');
    }
    async findByIdAndEstudiante(idEstudiante:Number, id:Number): Promise<Modulo[]> {
        throw new Error('Method not implemented.');
    }
    async save(modulo: Modulo): Promise<Modulo[]> {
        throw new Error('Method not implemented.');
    }
    async update(id: Number, estudiantes: Estudiante[]): Promise<Modulo[]> {
        throw new Error('Method not implemented.');
    }
    async addCalification(id: Number, idEstudiantes: Number, calificacion: Number): Promise<Modulo[]> {
        throw new Error('Method not implemented.');
    }
    async delete(id: Number): Promise<Modulo[]> {
        throw new Error('Method not implemented.');
    }


}
