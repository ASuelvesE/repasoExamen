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
        const idEstudiante = Number(req.params.id);
        const curso = req.params.curso;  
        const estudianteDB: Estudiante = await ApiEstudiantesRepository.findByIdAndCurso(idEstudiante,curso)
         res.send(estudianteDB);
    }
    catch (error) {
        res.send(error)
    }
})
router.post('/', async (req: Request, res: Response) => {
    try {       
        const nombre = req.body.nombre;
        const estudiante = await ApiEstudiantesRepository.save(new Estudiante(0,nombre,undefined,undefined));
        res.send(estudiante)
    }
    catch (error) {
        res.send(error)
    }
})

export { router as routerApiEstudiantes};