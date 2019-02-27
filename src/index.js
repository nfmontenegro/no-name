import {GraphQLServer} from 'graphql-yoga'
import {Prisma} from 'prisma-binding'
import jwt from 'jsonwebtoken'

import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'

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
  })
})

server.express.use((req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    const bearer = token.split(' ')
    const bearerToken = bearer[1]
    const {userId} = jwt.verify(bearerToken, process.env.SECRET_PASSWORD)
    req.userId = userId
  }
  next()
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
