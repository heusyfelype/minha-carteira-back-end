import { MongoClient } from "mongodb";

import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

mongoClient.connect();

const db = mongoClient.db(process.env.DATABASE_PATH);

console.log("Database Connected Succesfuly! \nUsing " + db.namespace + "\n");

export default db;
