import mongoose from "mongoose";
// import { MONGODB_URI } from "../config";
//const { DB_USER, DB_PASSWORD,DB_URI } = process.env;
var DB_USER = "rdmLinkedin"
var DB_PASSWORD = "aeqbz3NVxG1SGvtT"
var DB_URI ="@cluster0.lg0aogq.mongodb.net/?retryWrites=true&w=majority"
var mong = `mongodb+srv://${DB_USER}:${DB_PASSWORD}${DB_URI}`
console.log('Conect: ', mong,DB_USER);
(async () => {
  const db = await mongoose.connect(mong);
  console.log("db is connected: ", db.connection.name);
})();
