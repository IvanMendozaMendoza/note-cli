import db from "./connection.js";

const createNotesTable = () => {
  db.exec(`
        CREATE TABLE IF NOT EXISTS notes(
            key INTEGER PRIMARY KEY AUTOINCREMENT,
            title VARCHAR(300) NOT NULL,
            content TEXT NOT NULL,
            created_at TEXT DEFAULT (datetime('now', 'localtime'))
        ) STRICT
    `);
};

const create = db.prepare('INSERT INTO notes (title, content) VALUES (?,?)');
const selectOne = db.prepare('SELECT * FROM notes WHERE key = ?');
const selectAll = db.prepare('SELECT * FROM notes ORDER BY key');
const deleteOne = db.prepare('DELETE FROM notes WHERE key = ?');
const deleteAll = db.prepare('DELETE FROM notes');
const updateOne = db.prepare('UPDATE notes SET title = ?, content = ? WHERE key = ?');

export { createNotesTable, create, selectOne, selectAll, deleteOne, deleteAll, updateOne };