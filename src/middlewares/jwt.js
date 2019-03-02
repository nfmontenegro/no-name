import jwt from 'jsonwebtoken'

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

function getUserId(context) {
  const {request} = context
  const Authorization = request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = jwt.verify(token, process.env.SECRET_PASSWORD)
    return verifiedToken && verifiedToken.userId
  }
}

export {getUserId, AuthError}
