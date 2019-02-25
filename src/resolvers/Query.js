import {forwardTo} from 'prisma-binding'

const Query = {
  users: forwardTo('db')
}

export default Query
