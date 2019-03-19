import prisma from './client'

const userInput = {
  name: 'Manchi',
  lastname: 'Flores',
  email: 'manchi@gmail.com',
  password: '123'
}

async function getInitialUser(email) {
  return await prisma.query.user({where: {email}})
}

describe('#Resolvers prisma.graphql', () => {
  beforeEach(() => {
    jest.setTimeout(10000)
  })

  test('#Resolver => Create user ', async () => {
    const user = await getInitialUser(userInput.email)

    const createUser = await prisma.mutation.createUser({data: userInput})
    expect(createUser).toMatchObject({id: createUser.id, ...userInput})
    expect(createUser).toBeTruthy()
  })

  test('#Resolver => Update user', async () => {
    const user = await getInitialUser(userInput.email)
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
  })

  test('#Resolver => Delete user', async () => {
    const {email, name, lastname} = await prisma.mutation.deleteUser({
      where: {
        email: userInput.email
      }
    })

    expect(email).toBe('manchi@gmail.com')
    expect(name).toBe('Nicolás')
    expect(lastname).toBe('Flores')
  })
})
