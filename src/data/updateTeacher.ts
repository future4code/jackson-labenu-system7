import { connection } from "../index"

export  const updateTeacher = async (
   teacherId: string,
   missionId: string
): Promise<void> => {
   try {
      const result = await connection.raw(`
         SELECT * FROM Teacher
         WHERE id = "${teacherId}";
      `)

      if(!result[0][0]) throw new Error("Docente não encontrado")

      await connection.raw(`
         UPDATE labenu_system_TEACHERS
         SET mission_id = "${missionId}"
         WHERE id = "${teacherId}";
      `)

   } catch (error) {
      throw new Error(error.sqlMessage || error.message)
   }
}