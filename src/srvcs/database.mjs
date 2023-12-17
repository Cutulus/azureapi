import { BSON, MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();
const connectionString = process.env.ATLAS_URI || "";
if (!connectionString) { console.error("Missing connection string"); }

const client = new MongoClient(connectionString);
let conn;
try { conn = await client.connect(); } catch(e) { console.error(e); }
const dbConn = process.env.ATLAS_DB || "";
let db = conn.db(dbConn);
let ObjectId = BSON.ObjectId;

export {
  db,
  ObjectId
};