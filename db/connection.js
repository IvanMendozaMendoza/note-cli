import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("./notes.db");

export default db;