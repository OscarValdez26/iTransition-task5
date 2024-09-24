import express from "express";
import morgan from 'morgan';
//import cookieParser from "cookie-parser";
import cors from 'cors';

import apiRoutes from './routes/routes.js';

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
//app.use(cookieParser());
app.use(apiRoutes);

export default app;