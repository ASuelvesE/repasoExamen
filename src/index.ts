import express from 'express';
import dotenv from "dotenv"
import cors from 'cors';
// import the sagger lib
import swaggerUi from 'swagger-ui-express';
import fs from 'fs'

dotenv.config()

const app = express();
app.use(express.json())
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
/* Swagger files start */
const swaggerFile: any = ("src/swagger/swagger.json");
const swaggerData: any = fs.readFileSync(swaggerFile, 'utf8');
const customCss: any = fs.readFileSync(("src/swagger/swagger.css"), 'utf8');
const swaggerDocument = JSON.parse(swaggerData);
/* Swagger files end */


const port = process.env.PORT


//routers

import { routerApiEstudiantes } from './routes/api/api.estudiantes.router'
import { routerApiModulos } from './routes/api/api.modulos.router'


app.use('/estudiantes',routerApiEstudiantes)
app.use('/modulos',routerApiModulos)
app.use('/api/docs', swaggerUi.serve,
            swaggerUi.setup(swaggerDocument, undefined, undefined, customCss));

app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});