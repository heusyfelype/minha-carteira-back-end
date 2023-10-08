import { Db, MongoClient } from "mongodb";

import dotenv from "dotenv";

dotenv.config();
async function connection(): Promise<Db> {
  const mongoClient = new MongoClient(process.env.MONGO_URI);
  await mongoClient.connect();
  const db = mongoClient.db(process.env.DATABASE_PATH);
  console.log(
    "Database Connected Successfully! \nUsing " + db.namespace + "\n"
  );
  return db;
}

const db = await connection();

export default db;
