import {GraphQLServer} from 'graphql-yoga'
import {Prisma} from 'prisma-binding'

import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'

import {permissions} from './middlewares/permissions'

require('dotenv').config()

const server = new GraphQLServer({
  typeDefs: __dirname + '/prisma.graphql',
  resolvers: {
    Query,
    Mutation
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: __dirname + '/prisma.graphql',
      endpoint: process.env.PRISMA_ENDPOINT,
      secret: process.env.PRISMA_PASSWORD,
      debug: false
    })
  }),
  middlewares: [permissions]
})

const options = {
  port: process.env.PORT,
  formatError(err) {
    return err.message
  }
}

server.start(options =>
  console.log('Server is now running on port: http://localhost:4000')
)
