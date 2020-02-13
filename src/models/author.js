import mongoose from "mongoose"
import { PostModel } from "./post"

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: { type: String, default: '' },
    email: { type: String, default: '' }
}, {
   versionKey: false
});

AuthorSchema.methods.getPosts = async function() {
    return Post.find({AuthorId: this._id})
}

const AuthorModel =  mongoose.model('Author', AuthorSchema, "authors")
AuthorModel.create = async (datas) => {
     let author = new AuthorModel({
         name: datas.name,
         email: datas.email,
     })
     return author.save()
}

export { AuthorModel };
