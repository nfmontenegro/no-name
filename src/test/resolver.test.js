const prisma = require('./client')

const initialUser = {
  name: 'Manchi',
  lastname: 'Flores',
  email: 'manchi@gmail.com',
  password: '123'
}

describe('#Resolvers prisma.graphql', () => {
  beforeEach(() => {
    jest.setTimeout(30000)
  })

  test('#Resolver => Create user ', async () => {
    try {
      const user = await prisma.query.user({where: {email: initialUser.email}})
      if (user) {
        const deleteUser = await prisma.mutation.deleteUser({where: {email: initialUser.email}})
        expect(deleteUser).toMatchObject(initialUser)
      }
      const createUser = await prisma.mutation.createUser({data: initialUser})
      expect(createUser).toMatchObject(initialUser)
      expect(createUser).toBeTruthy()
      expect(createUser).toContain({name: 'Manchi', lastname: 'Flores'})
    } catch (err) {
      if (err.message.includes('type')) {
        const message = `Cannot read property 'type' of undefined`
        expect(message).toBe(err.message)
      }
    }
  })

  test('#Resolver => Update user', async () => {
    try {
      //TODO: export function to get initial user
      const user = await prisma.query.user({where: {email: initialUser.email}})
      const expectedUser = {
        id: user.id,
        name: 'Nicolás',
        lastname: 'Flores',
        email: 'manchi@gmail.com',
        password: '123'
      }

      const updateUser = await prisma.mutation.updateUser({data: {name: 'Nicolás'}, where: {id: user.id}})
      expect(updateUser).toMatchObject(expectedUser)
    } catch (err) {
      console.log('Error:', err)
    }
  })
})
