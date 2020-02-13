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
