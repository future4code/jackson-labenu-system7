import { connection} from "../index";


 export const createStudent = async (
    id:string,
    name: string,
    email: string,
    dateOfBirth: Date,
    hobbie: string
  ): Promise<void> => {
    await connection
      .insert({
        id:id,
        name:name,
        email:email,
        dateOfBirth:dateOfBirth,
        hobbie:hobbie
      })
      .into("Students");
  };
  