import {forwardTo} from 'prisma-binding'

const Mutations = {
  //validate if user exist
  async createUser(parent, {data}, ctx, info) {
    const {name} = data
    const user = await ctx.db.query.users({where: {name}})
    if (user.length > 0) throw new Error('User exist!')

    return ctx.db.mutation.createUser(
      {
        data: {
          name
        }
      },
      info
    )
  }
}

export default Mutations
