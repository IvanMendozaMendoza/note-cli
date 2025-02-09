#!/usr/bin/env node
import { select, input } from "@inquirer/prompts";
import { create, selectAll } from "./db/querys.js";

const answer = await select({
  message: "Select operation",
  choices: [
    {
      name: "create note",
      value: "create",
      description: "create notes database",
    },
    {
      name: "read notes",
      value: "read",
      description: "read all notes",
    },
  ],
});

if (answer === "create") {
  const title = await input({ message: "Enter the title" });
  const content = await input({ message: "Enter the content" });
  try {
    create.run(title, content);
    console.log("Note created successfully.");
  } catch (err) {
    console.error("Error creating note:", err);
  }
}

if (answer === "read") {
  try {
    selectAll.all().forEach((el) => {
      console.log(`title: ${el.title}, content: ${el.content}`);
    });
  } catch (err) {
    console.error("Error reading notes:", err);
  }
}
