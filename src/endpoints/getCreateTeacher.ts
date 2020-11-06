import { Request, Response } from "express";
import { createTeacher } from "../data/createTeacher";


export const getCreateTeacher = async(req:Request, res:Response) =>{
    try{
        if(!req.body.name ||
            !req .body.email ||
            !req.body.dateOfBirth ||
            !req.body.especialidades
            ){
                res.status(400)
                .send("Digite todos os campos")
            }
            const id:string =Date.now() + Math.random().toString()
            await createTeacher(
                id,
                req.body.name,
                req.body.email,
                new Date (req.body.dateOfBirth),
                req.body.especialidades,
            );
            res.status(200).send("Professor criado com sucesso!")

    }catch(err){
      res.status(400).send({
        message: err.message ||  err.sqlMessage 
      })
    }
}