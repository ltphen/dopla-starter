import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db: Database;
export const openDb = async (): Promise<Database> => {
  return open({
    filename: './database/store.db',
    driver: sqlite3.Database
  });
}

 export const savePreferences = async (userId: string, preferences: {languageLevel: string, objectives: string, commitment: string}) =>{
    try {
        db = await openDb();
        const stmt = await db.prepare("INSERT INTO userPreferences (userId, languageLevel, objectives, commitment) VALUES (?, ?, ?, ?)");
        const result = await stmt.run(userId, preferences.languageLevel, preferences.objectives, preferences.commitment);    
        await stmt.finalize();
        return result;
    } catch (error) {
        console.error(error);
    } finally {
        if (db) {
          await db.close();
        }
    }
    
}

export const getPreferences = async (userId: string)=>{
    try {
        db = await openDb();
        const stmt = await db.prepare("SELECT * FROM userPreferences WHERE userID=?");
        const result = await stmt.get(userId);    
        await stmt.finalize();
        return result;
      } catch (error) {
        console.error(error);
      } finally {
        if (db) {
          await db.close();
        }
    }
    
   
}

