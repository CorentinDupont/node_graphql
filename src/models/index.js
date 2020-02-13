import { configs } from "../config/config"
import mongoose from "mongoose"
import { AuthorModel } from "./author"
import { PostModel } from "./post"

const env = process.env.NODE_ENV || 'development'
const config = configs[env]
const db = {}

mongoose.connect(config.mongo, {useNewUrlParser: true});

db['Author'] = AuthorModel;
db['Post'] = PostModel;

db.mongoose = mongoose

export { db }