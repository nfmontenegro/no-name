const {Prisma} = require('prisma-binding')

require('dotenv').config()

const prisma = new Prisma({
  typeDefs: __dirname + '/prisma.graphql',
  endpoint: 'https://eu1.prisma.sh/nicolas-flores-montenegro-f8a898/now-prisma/dev',
  secret:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJub3ctcHJpc21hQGRldiIsInJvbGVzIjpbImFkbWluIl19LCJpYXQiOjE1NTIwOTM4NDcsImV4cCI6MTU1MjY5ODY0N30.PlfgmfjrCIlQgGd4dANl7Zw-kvzAr4h97MlLtCqfJpw'
})

module.exports = prisma
