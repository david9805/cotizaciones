import express from 'express';
import config from './config.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


import productsRoutes from './routes/products.routes.js';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const ruta = __dirname;


//setting
//app.engine('html',require('ejs').renderFile);

app.set('port',config.port);
app.set('view engine','ejs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(productsRoutes);
export default app;