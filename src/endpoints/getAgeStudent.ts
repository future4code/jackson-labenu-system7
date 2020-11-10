import {Request ,Response} from "express"
import { ageStudent } from "../data/ageStudent";

export const getAgeStudent = async(req:Request, res:Response):Promise<any> =>{
    try{
        const id = (req.params.id);
        const studentBirthdate = (await ageStudent (id)) [0].dateOfBirth;

        const data: Date = new Date(studentBirthdate)

        const ageMilisseconds :number= Date.now() - data.getTime();

        const age:number = Math.floor(ageMilisseconds /1000/60/60/24/365);
        res.status(200).send({
            message:`${age}`
        })
    }catch(err){
        res.status(400).send({
            message:err.message || err.sqlMessage
        })
    }
}