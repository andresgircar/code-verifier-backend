import express, { Request, Response } from "express";
import { HelloController } from "@/controller/HelloController";
import { LogInfo } from "@/utils/logger";

// Router from express
let helloRouter = express.Router();

// http://localhost:8000/api/hello/
helloRouter.route('/')
    // GET:
    .get(async (req: Request, res: Response) => {
        //Obtaining a query param
        let name: any = req?.query?.name;
        LogInfo(`Query Param: ${name}`);
        // Controller instance to execute method
        const controller: HelloController = new HelloController();
        // Obtaining response
        const response = await controller.getMessage(name);
        // Send response to client
        return res.send(response);
    })