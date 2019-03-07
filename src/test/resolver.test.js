import {createApolloFetch} from 'apollo-fetch'

const {HOST, PORT} = process.env
test('adds 1 + 2 to equal 3', () => {
  const apolloFetch = createApolloFetch({
    uri: `${HOST}${PORT}`,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanN0a29nZzFib3hqMGI4NzJpZnRmY2l3IiwiaWF0IjoxNTUxNjU5MTMxfQ.4F7iRY1uQ67xNKAGHAl6HX3HVom0HuZhIvHxnIir_ig'
    }
  })
  console.log(HOST, PORT)
  apolloFetch({
    query: `mutation login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    token
    user {
      id
      name
      lastname
      email
    }
  }
}
`,
    variables: {email: 'new2@gmail.com', password: '123'}
  }).then(response => expect(response).toBe(true))
})
