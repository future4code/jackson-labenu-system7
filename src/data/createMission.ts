import { connection} from "../index"
import  {Mission}  from "../types/Mission"

export const createMission= async(
   newMission: Mission
): Promise<void> => {
   try {
      await connection.raw(`
         INSERT INTO system_MISSIONS
            (id, name, start_date, end_date, module, shift)
         VALUES(
            "${newMission.id}",
            "${newMission.name}",
            "${newMission.start}",
            "${newMission.end}",
            "${newMission.module || null}",
            "${newMission.shift}"
         );
      `)

   } catch (error) {
      throw new Error(error.sqlMessage || error.message)
   }
}

