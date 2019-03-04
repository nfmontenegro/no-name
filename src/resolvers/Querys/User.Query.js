import {forwardTo} from 'prisma-binding'

export default {
  Query: {
    user: forwardTo('db'),
    users: forwardTo('db')
  }
}
