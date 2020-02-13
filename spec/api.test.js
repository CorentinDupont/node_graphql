import app  from '../src/app'
import request from 'supertest'

describe('GET /', () => {
  let response

  test('verify send many posts has authors', async () =>{
    const query_string = `{
      posts {
        title
        author {
          name
        }
      }
    }`
    response  = await  request(app)
      .post('/graphql').send({ query:  query_string})
    expect(response.body.data.posts[0].title).toBe("My first blog post")
    expect(response.body.data.posts[0].author.name).toBe("Xavier Decuyper")
    console.log(response.body)
    })

    test('verify send one post has author', async () =>{
      const query_string = `{
        post(id: 1) {
          title
          author {
            name
          }
        }
      }`
      response  = await  request(app)
        .post('/graphql').send({ query:  query_string })
      expect(response.body.data.post.title).toBe("My first blog post")
      expect(response.body.data.post.author.name).toBe("Xavier Decuyper")
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
