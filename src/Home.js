import {useEffect, Fragment} from 'react'
import {MailIcon, PhoneIcon} from '@heroicons/react/solid'
import {useSelector, useDispatch} from 'react-redux'
// import {useHistory} from 'react-router-dom'
import {getUsers} from './store/users.slice'

const Home = () => {
  const {
    users: {data, loading}
  } = useSelector(state => state.usersReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    async function getAllUsers() {
      await dispatch(getUsers())
    }
    getAllUsers()
  }, [dispatch])

  const renderUserCard = data => (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10"
    >
      {data?.length > 0 &&
        data.map(user => (
          <li
            key={user.email}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                src={user.avatarUrl}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                {user.name} {user.lastname}
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-gray-500 text-sm">{user.bio}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="px-2 py-1 text-green-800 text-xs font-medium bg-geen-100 rounded-full">
                    {user.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <a
                    href={`mailto:${user.email}`}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Email</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href={`tel:${user.phone}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Call</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
    </ul>
  )

  return loading ? 'Loading ...' : <Fragment>{renderUserCard(data)}</Fragment>
}

export default Home
