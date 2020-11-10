import { Request, Response } from "express"
import { createMission } from "../data/createMission";
import { Mission } from "../types/Mission";
import convertFormat from "../services/convertFormat"
import generateId from "../services/generateId"

export const getCreateMission = async(req:Request, res:Response):Promise<void> =>{
    try{
      const { name, start, end, module, shift } = req.body

      if (!name || !start || !end || !shift) {
         res.statusCode = 406
         throw new Error("'name', 'start', 'end' e 'shift' são obrigatórios")
      }
        

            const startDateTimestamp: number = new Date(convertFormat(start)).getTime()
             const endDateTimestamp: number = new Date(convertFormat(end)).getTime()

             if (startDateTimestamp >= endDateTimestamp) {
              res.statusCode = 406
              throw new Error("Data de início deve ser anterior à de término")
           }
     
           if(!name.includes("-na-night")){
              res.statusCode = 406
              throw new Error("Nomes das turmas noturnas devem terminar com '-na-night'")
           }

           const newMission: Mission = {
            id: generateId(),
            name,
            start: convertFormat(start),
            end: convertFormat(end),
            module,
            shift,
            teachers: [],
            students: []
         }

           
            await createMission(newMission)
               
            res.status(200).send("Turma cadastrada com sucesso!")

    }catch(err){
      
      let { message } = err
     
      if (message.includes(" for key 'name'")) {
         res.statusCode = 409
         message = "Nome já existe"
      } 
      
      if (message.includes("Incorrect date value")) {
         res.statusCode = 406
         message = "Insira datas de início e término válidas, no formato 'dd/mm/aaaa'"
      }

      if (message.includes("Data truncated for column 'shift'")) {
         res.statusCode = 406
         message = "Valores válidos para 'shift' são 'INTEGRAL' e 'NOTURNA'"
      }

      res.send(message)

   }
}