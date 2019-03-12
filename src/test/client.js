import {Prisma} from 'prisma-binding'
import path from 'path'

require('dotenv').config()

const prisma = new Prisma({
  typeDefs: path.join(__dirname, '../generated/prisma.graphql'),
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_PASSWORD
})

module.exports = prisma
