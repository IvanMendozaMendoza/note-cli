import { program } from "commander";
import { createNotesTable } from "../../db/querys";

program
  .command("init")
  .description("Create database to store your notes")
  .action(() => {
    createNotesTable();
  });
