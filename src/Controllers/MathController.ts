import express, { Request, Response,NextFunction} from 'express'
const app = express()
import {ValidateParams} from '../Middlewares/validateParams;
import{Handler }from '../Services/Mathservices';

app.use("/calcul",ValidateParams,Handler);