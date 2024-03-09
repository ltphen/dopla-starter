// simple
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db;
export const openDb = async () => {
  return open({
    filename: './database/store.db',
    driver: sqlite3.Database
  });
}
(async function(){
    const db = await openDb();
    await db.migrate({    
        migrationsPath: "./database/migrations"
    })
})()