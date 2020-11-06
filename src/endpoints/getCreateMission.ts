import { Request, Response } from "express"
import { createMission } from "../data/createMission";



export const getCreateMission = async(req:Request, res:Response) =>{
    try{
        if(!req.body.name ||
            !req .body.start ||
            !req.body.end ||
            !req.body.module
            ){
                res.status(400)
                .send("Digite todos os campos")
            }
            const id:string = Date.now() + Math.random().toString()
            await createMission(
                id,
                 req.body.name,
                 new Date(req.body.start),
                 new Date(req.body.end),
                 req.body.module,
            );
            res.status(200).send("Missão criada com sucesso!")

    }catch(err){
      res.status(400).send({
        message: err.message ||  err.sqlMessage 
      })
    }
}