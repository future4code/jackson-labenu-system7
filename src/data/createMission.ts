import { connection} from "../index";


 export const createMission = async (
    id:string,
    name:string,
    start:Date,
    end:Date,
    module:string
  ): Promise<void> => {
    await connection
      .insert({
        id:id,
        name:name,
        start:start,
        end:end,
        module:module
      })
      .into("Mission");
  };
  