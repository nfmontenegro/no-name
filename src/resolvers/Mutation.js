import {forwardTo} from 'prisma-binding'

const Mutations = {
  async createUser(parent, {data}, ctx, info) {
    if (!ctx.request.userId)
      throw new Error('You must be logged in to do that!')

    const user = await ctx.db.query.users({where: {name: data.name}})
    if (user.length > 0) throw new Error('User exist!')

    return ctx.db.mutation.createUser(
      {
        data
      },
      info
    )
  }
}

export default Mutations
