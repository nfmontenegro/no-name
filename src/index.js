import {GraphQLServer} from 'graphql-yoga'
import {Prisma} from 'prisma-binding'

import Query from './resolvers/Query'

require('dotenv').config()
const server = new GraphQLServer({
  typeDefs: __dirname + '/prisma.graphql',
  resolvers: {
    Query
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
  })
})

server.start(() =>
  console.log('Server is now running on port: http://localhost:4000')
)
