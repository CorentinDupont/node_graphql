const factoryGirl = require('factory-girl')
const adapter = new factoryGirl.MongooseAdapter()
const factory = factoryGirl.factory
factory.setAdapter(adapter)

import { PostModel } from './../../models/post'

factory.define('post', PostModel, {
  title: factory.sequence((n) => `title${n}`),
  content: factory.sequence((n) => `content${n}`),
  authorId: factory.assoc('author', '_id')
});
