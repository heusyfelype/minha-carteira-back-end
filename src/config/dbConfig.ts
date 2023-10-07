import { Db, MongoClient } from "mongodb";

import dotenv from "dotenv";

dotenv.config();

console.log("URL DATABASE: ", process.env.MONGO_URI)
const mongoClient = new MongoClient(process.env.MONGO_URI);

const connection = mongoClient.connect();

let db: Db;

connection.then(() => {
  db = mongoClient.db(process.env.DATABASE_PATH);
  console.log("Database Connected Succesfuly! \n Using " + db.namespace);
});

connection.catch(() => {
  console.log(
    "Ops, something went wrong. Did not possible to connect database"
  );
});

export default db;
