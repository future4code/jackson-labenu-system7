import { connection} from "../index";


 export const createStudent = async (
    id:string,
    name: string,
    email: string,
    dateOfBirth: Date,
    hobbies: string
  ): Promise<void> => {
    await connection
      .insert({
        id:id,
        name:name,
        email:email,
        dateOfBirth:dateOfBirth,
        hobbies:hobbies
      })
      .into("system_STUDENTS");
  };
  