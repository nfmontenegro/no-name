import {mergeResolvers} from 'merge-graphql-schemas'
import UserQuery from './Querys/User.Query'
import UserMutation from './Mutations/User.Mutation'

const resolversArray = [UserQuery, UserMutation]

const resolvers = mergeResolvers(resolversArray)

export default resolvers
