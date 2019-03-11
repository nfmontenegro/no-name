import prisma from './client'

const userInput = {
  name: 'Manchi',
  lastname: 'Flores',
  email: 'manchi@gmail.com',
  password: '123'
}

describe('#Resolvers prisma.graphql', () => {
  test('#Resolver => Create user ', async () => {
    try {
      const user = await prisma.query.user({where: {email: userInput.email}})
      if (user) {
        await prisma.mutation.deleteUser({
          where: {
            email: userInput.email
          }
        })
      } else {
        expect(user).toBeNull()
      }
      const createUser = await prisma.mutation.createUser({data: userInput})
      expect(createUser).toMatchObject({id: createUser.id, ...userInput})
      expect(createUser).toBeTruthy()
    } catch (err) {
      if (err.message.includes('type')) {
        const message = `Cannot read property 'type' of undefined`
        expect(message).toBe(err.message)
        throw new Error(err.message)
      }
      throw new Error(err.message)
    }
  })

  test('#Resolver => Update user', async () => {
    try {
      //TODO: export function to get initial user
      const user = await prisma.query.user({where: {email: userInput.email}})
      const expectedUser = {
        id: user.id,
        name: 'Nicolás',
        lastname: 'Flores',
        email: 'manchi@gmail.com',
        password: '123'
      }

      const updateUser = await prisma.mutation.updateUser({
        data: {
          name: 'Nicolás'
        },
        where: {
          id: user.id
        }
      })

      expect(updateUser).toMatchObject(expectedUser)
    } catch (err) {
      throw new Error(err.message)
    }
  })
})
