import {forwardTo} from 'prisma-binding'

const Query = {
  users: forwardTo('db'),
  user: forwardTo('db')
}

export default Query
