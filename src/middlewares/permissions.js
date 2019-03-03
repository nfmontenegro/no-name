import {getUserId} from './jwt'
import {rule, shield} from 'graphql-shield'

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  }),
  isOwner: rule()(async (parent, {id}, context) => {
    const userId = getUserId(context)
    const user = await context.db.query.user({where: {id}})
    return userId === user._id
  })
}

const permissions = shield({
  Query: {
    users: rules.isAuthenticatedUser
  },
  Mutation: {}
})

export {permissions}
