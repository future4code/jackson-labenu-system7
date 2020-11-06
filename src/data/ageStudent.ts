import {connection} from "../index"
//import { Student } from "../types"

export const ageStudent = async ( id:string):Promise<any> =>{
    try{
        const result = await connection("Students")
            .select ('dateOfBirth')
            .where ('id',id)

        return result
    }catch(err){
        console.log(err)

    }
}