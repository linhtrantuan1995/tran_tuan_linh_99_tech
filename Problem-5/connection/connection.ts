 
import { resource } from "../entities/resource";
import { createConnection } from "typeorm";

export const connection = createConnection({
  type: "postgres" ,
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456aA@",
  database: "test",
  entities: [resource],
  synchronize: true,
  logging: false
});