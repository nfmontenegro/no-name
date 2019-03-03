import {forwardTo} from 'prisma-binding'

const Query = {
  user: forwardTo('db'),
  users: forwardTo('db')
}

export default Query
