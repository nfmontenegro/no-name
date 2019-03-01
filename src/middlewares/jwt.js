import jwt from 'jsonwebtoken'

function checkToken(resolve, parent, args, ctx, info) {
  const {request} = ctx
  const token = request.headers.authorization
  if (token) {
    const bearer = token.split(' ')
    const bearerToken = bearer[1]
    const {userId} = jwt.verify(bearerToken, process.env.SECRET_PASSWORD)
    request.userId = userId
  }
  return resolve(parent, args, ctx, info)
}

export default checkToken
