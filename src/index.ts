import express from 'express';
import dotenv from "dotenv"
import cors from 'cors';

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger-output.json')

dotenv.config()

const app = express();
app.use(express.json())
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));


const port = process.env.PORT


//routers

import { routerApiEstudiantes } from './routes/api/api.estudiantes.router'
import { routerApiModulos } from './routes/api/api.modulos.router'


app.use('/estudiantes',routerApiEstudiantes)
app.use('/modulos',routerApiModulos)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});