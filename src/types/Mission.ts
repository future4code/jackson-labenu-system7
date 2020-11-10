import { Teacher , Student} from "./types";

export enum SHIFTS {
    INTEGRAL = "INTEGRAL",
    NOTURNA = "NOTURNA"
 }
 
 export type Mission = {
    id: string,
    name: string,
    start: string,
    end: string,
    teachers: Teacher[],
    students: Student[],
    module: number,
    shift: SHIFTS
 }