import { connection} from "../index";


 export const createTeacher= async (
    id:string,
    name: string,
    email: string,
    dateOfBirth: Date,
    especialidades: string
  ): Promise<void> => {
    await connection
      .insert({
        id:id,
        name:name,
        email:email,
        dateOfBirth:dateOfBirth,
       especialidades:especialidades
      })
      .into("Teachers");
  };
  