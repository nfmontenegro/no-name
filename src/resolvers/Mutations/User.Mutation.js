import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default {
  Mutation: {
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
      if (!user) throw new Error(`No such user found for email ${data.email}`)

      const valid = await bcrypt.compare(data.password, user.password)
      if (!valid) throw new Error('Invalid Password!')

      const token = jwt.sign({userId: user.id}, process.env.SECRET_PASSWORD)
      return {token, user}
    },
    async deleteUser(parent, {id}, {db}, info) {
      await db.mutation.deleteUser({where: {id}})
      return 'Success delete user!'
    },
    async updateUser(parent, {data}, {db}, info) {
      const {id, ...rest} = data
      return db.mutation.updateUser({
        data: rest,
        where: {
          id
        }
      })
    }
  }
}
