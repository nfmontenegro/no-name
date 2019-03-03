import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {forwardTo} from 'prisma-binding'

const Mutations = {
  async createUser(parent, {data}, {db}, info) {
    const user = await db.query.users({where: {email: data.email}})
    if (user.length > 0) throw new Error('User exist!')
    const password = await bcrypt.hash(data.password, 10)

    return db.mutation.createUser(
      {
        data: {
          ...data,
          password
        }
      },
      info
    )
  },
  async login(parent, {data}, {db}, info) {
    const user = await db.query.user({where: {email: data.email}})
    if (!user) {
      throw new Error(`No such user found for email ${data.email}`)
    }
    const valid = await bcrypt.compare(data.password, user.password)
    if (!valid) {
      throw new Error('Invalid Password!')
    }

    console.log('User:', user)
    const token = jwt.sign({userId: user.id}, process.env.SECRET_PASSWORD)
    return {token, user}
  }
}

export default Mutations
