import {forwardTo} from 'prisma-binding'

const Mutations = {
  createUser: forwardTo('db')
}

export default Mutations
