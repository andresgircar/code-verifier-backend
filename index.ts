import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

// Configuration of .env file
dotenv.config();

// Create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// First route creation
app.get('/', (req: Request, res: Response) => {
    // Send Hello World
    res.send('Welcome to my API Restful Express + TS + Jest + Swagger + Mongoose')
});

// First route creation
app.get('/hello', (req: Request, res: Response) => {
    // Send Hello World
    res.send('Welcome to GET Route ¡Hello!')
});

// App execution and listening reqs from PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
});