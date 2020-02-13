import app  from '../app'
import request from 'supertest'
import { cleanDb } from './helpers/cleanDb';
import { db } from '../models';

require('./factories/author').factory
require('./factories/post').factory
import { factory } from 'factory-girl'

describe('GET /', () => {
  let response
  let posts;

  beforeEach(async () => {
    cleanDb(db)
    posts = await factory.createMany('post', 3);
  })

  test('verify send many posts has authors', async () =>{
    const query_string = `{
      posts {
        title
        author {
          _id
          name
        }
      }
    }`
    response  = await  request(app)
      .post('/graphql').send({ query:  query_string})
    expect(response.body.data.posts[0].title).toBe(posts[0].title)
      const author = await db.Author.findById(response.body.data.posts[0].author._id)
    expect(response.body.data.posts[0].author.name).toBe(author.name)
    console.log(response.body)
    })

    test('verify send one post has author', async () =>{
      const query_string = `{
        post(id: "${posts[0]._id.toString()}") {
          title
          author {
            _id
            name
          }
        }
      }`
      response  = await  request(app)
        .post('/graphql').send({ query:  query_string })
        console.log(response.body.errors)
      expect(response.body.data.post.title).toBe(posts[0].title)
      const author = await db.Author.findById(response.body.data.post.author._id)
      expect(response.body.data.post.author.name).toBe(author.name)
      console.log(response.body)
    })

    test('verify send one author has name', async () =>{
      const query_string = `{
        author(id: "88d6bec2") {
          name
        }
      }`
      response  = await  request(app)
        .post('/graphql').send({ query:  query_string })
      expect(response.body.data.author.name).toBe("Xavier Decuyper")
      console.log(response.body)
    })
});

// describe('POST/', () => {
//   let response

//   test('verify adding correctly new blog post', async () =>{
//     const query_string = `{
//       posts {
//         title
//         author {
//           name
//         }
//       }
//     }`
//     response  = await  request(app)
//       .post('/graphql')
//       .send({
//         query:  query_string,
//         variables: 
//       })
//       .set('Accept', 'application/json')
//       .set('Content-Type', )
//     expect(response.body.data.posts[0].title).toBe("My first blog post")
//     expect(response.body.data.posts[0].author.name).toBe("Xavier Decuyper")
//     console.log(response.body)
//     })
// })
