import express, { Request, Response } from 'express'
import Modulo from '../../models/Modulo';
import ModulosRepositoryMySQL from '../../repositories/api/modulos/modulos.mysql';


const router = express.Router()

const ApiModulosRepository = new ModulosRepositoryMySQL();

router.get('/', async (req: Request, res: Response) => {
    try {       
        const modulos = await ApiModulosRepository.findAll();
        res.send(modulos)
    }
    catch (error) {
        res.send(error)
    }
})
router.get('/:id/:curso', async (req: Request, res: Response) => {
    try {       
        const idModulo = Number(req.params.id);
        const curso = String(req.params.curso);
        const modulo = await ApiModulosRepository.findByIdAndCurso(idModulo,curso);
        res.send(modulo)
    }
    catch (error) {
        res.send(error)
    }
})
router.get('/:id/:curso/calificaciones', async (req: Request, res: Response) => {
    try {       
        const idModulo = Number(req.params.id);
        const curso = String(req.params.curso);
        const modulo = await ApiModulosRepository.findCalificacionesByIdAndCurso(idModulo,curso);
        res.send(modulo);
    }
    catch (error) {
        res.send(error)
    }
})
router.post('/', async (req: Request, res: Response) => {
    try {       
        const nombre:String = req.body.nombre;
        const modulo = await ApiModulosRepository.save(new Modulo(0,nombre,undefined,undefined,undefined));
        res.send(modulo);
    }
    catch (error) {
        res.send(error)
    }
})
router.put('/:id/:curso', async (req: Request, res: Response) => {
    try {       
        const idModulo = Number(req.params.id);
        const curso = String(req.params.curso);
        const estudiantes = req.body.estudiantes;
        const modulos = await ApiModulosRepository.addEstudiantesByIdAndCurso(idModulo,curso,estudiantes)
        res.send(estudiantes.length + " estudiantes matriculados");
    }
    catch (error) {
        res.send(error)
    }
})
router.put('/:id/:curso/:estudiante', async (req: Request, res: Response) => {
    try {       
        const idModulo = Number(req.params.id);
        const curso = String(req.params.curso);
        const idEstudiante = Number(req.params.estudiante);
        const calificacion = req.body.calificacion;
        const modulos = await ApiModulosRepository.addCalificationByIdAndCurso(idModulo,curso,idEstudiante,calificacion)
        res.send(modulos);
    }
    catch (error) {
        res.send(error)
    }
})

export { router as routerApiModulos};