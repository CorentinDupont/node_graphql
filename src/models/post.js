import mongoose from "mongoose"

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    authorId: { type: Schema.ObjectId, ref: 'authors' },
});

const PostModel = mongoose.model('Post', PostSchema, "posts")
PostModel.create = async (datas) => {
    let post = new PostModel({
        content: datas.firstName,
        title: datas.lastName,
        authorId: datas.authorId,
    })
    return post.save()
}

export { PostModel };