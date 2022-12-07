import express, { Request, Response } from 'express'
import Estudiante from '../../models/Estudiante';
import Modulo from '../../models/Modulo'
import EstudiantesRepositoryMySQL from '../../repositories/api/estudiantes/estudiantes.mysql';
import ModulosRepositoryMySQL from '../../repositories/api/modulos/modulos.mysql';

const router = express.Router()

const ApiEstudiantesRepository = new EstudiantesRepositoryMySQL();
const ApiModulosRepository = new ModulosRepositoryMySQL();

router.get('/', async (req: Request, res: Response) => {
    try {       
        const estudiantes: Estudiante[] = await ApiEstudiantesRepository.findAll();
       res.send(estudiantes)
    }
    catch (error) {
        res.send(error)
    }
})
router.get('/:id/:curso', async (req: Request, res: Response) => {
    try {       
        const estudianteDB: Estudiante = await ApiEstudiantesRepository.findById(Number(req.params.id))
        const modulosDB: Modulo[] = await ApiModulosRepository.findByIdAndEstudiante(Number(req.params.id),Number(req.params.curso))
        const estudiante: Estudiante = new Estudiante(estudianteDB.id,estudianteDB.nombre,modulosDB);
        res.send(estudiante);
    }
    catch (error) {
        res.send(error)
    }
})
router.post('/', async (req: Request, res: Response) => {
    try {       
        const estudiantes = await ApiEstudiantesRepository.save(new Estudiante(0,req.body.nombre,undefined));
        res.send(estudiantes)
    }
    catch (error) {
        res.send(error)
    }
})

export { router as routerApiEstudiantes};