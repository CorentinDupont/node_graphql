export const cleanDb = async (db) => {
  try {
    await db.Author.collection.drop();
    await db.Post.collection.drop();
  } catch (e) {
  }
}
