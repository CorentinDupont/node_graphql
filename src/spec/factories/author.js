const factoryGirl = require('factory-girl')
const adapter = new factoryGirl.MongooseAdapter()
const factory = factoryGirl.factory
factory.setAdapter(adapter)

import { AuthorModel } from './../../models/author'

factory.define('author', AuthorModel, {
  name: factory.sequence((n) => `name${n}`),
  email: factory.sequence((n) => `email${n}`),
})