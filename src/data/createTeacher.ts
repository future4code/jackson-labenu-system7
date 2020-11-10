import { connection} from "../index";


 export const createTeacher= async (
    id:string,
    name: string,
    email: string,
    dateOfBirth: Date,
    specialties: string
  ): Promise<void> => {
    await connection
      .insert({
        id:id,
        name:name,
        email:email,
        dateOfBirth:dateOfBirth,
        specialties:specialties
      })
      .into("system_TEACHERS ");
  };
  