import { Request, Response } from "express"
import { createStudent } from "../data/createStudent";


export const getCreateStudent = async(req:Request, res:Response) =>{
    try{
        if(!req.body.name ||
            !req .body.email ||
            !req.body.dateOfBirth ||
            !req.body.hobbies
            ){
                res.status(400)
                .send("Digite todos os campos")
            }
            const id:string =Date.now() + Math.random().toString()
            await createStudent(
                id,
                req.body.name,
                req.body.email,
                new Date (req.body.dateOfBirth),
                req.body.hobbies || [],
            );
            res.status(200).send("Estudante criado com sucesso!")

    }catch(err){
      res.status(400).send({
        message: err.message ||  err.sqlMessage 
      })
    }
}