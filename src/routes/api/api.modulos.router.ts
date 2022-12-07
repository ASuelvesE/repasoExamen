import express, { Request, Response } from 'express'
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
router.get('/:id', async (req: Request, res: Response) => {
    try {       
        const modulo = await ApiModulosRepository.findAll()
        res.send(modulo)
    }
    catch (error) {
        res.send(error)
    }
})
router.post('/', async (req: Request, res: Response) => {
    try {       
         res.send(periodistas)
    }
    catch (error) {
        res.send(error)
    }
})
router.put('/:id', async (req: Request, res: Response) => {
    try {       
        res.send(periodistas)
    }
    catch (error) {
        res.send(error)
    }
})
router.delete('/:id', async (req: Request, res: Response) => {
    try {       

        res.send(periodistas)
    }
    catch (error) {
        res.send(error)
    }
})
export { router as routerApiModulos};