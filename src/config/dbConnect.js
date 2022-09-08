import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:root@treinandoapi.lnq1hxb.mongodb.net/treinandoapi")

let db = mongoose.connection;

export default db;
