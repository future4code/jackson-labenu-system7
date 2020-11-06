import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getCreateStudent } from "./endpoints/getCreateStudent";
import {getCreateTeacher} from "./endpoints/getCreateTeacher";
import { getAgeStudent } from "./endpoints/getAgeStudent";
import { getCreateMission } from "./endpoints/getCreateMission";

dotenv.config();
console.log(process.env.teste)

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

// endpoints

app.post("/student/create",getCreateStudent);
app.get("/student/age/:id",getAgeStudent);
app.post("/teacher/create",getCreateTeacher);
app.post("/mission/create",getCreateMission);




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
 });
 