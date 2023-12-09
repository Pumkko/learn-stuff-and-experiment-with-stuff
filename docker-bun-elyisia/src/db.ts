import Database from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";

const sqliteDb = new Database("mydb.sqlite", {
    create: true,
    readwrite: true
  });
  export const db = drizzle(sqliteDb)