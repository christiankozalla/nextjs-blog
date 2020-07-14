import sqlite from "sqlite3";
import path from "path";

const pathToDb = path.join(process.cwd(), "database");
const db = new sqlite.Database(`${pathToDb}/postdb.sqlite`);

export default db;
