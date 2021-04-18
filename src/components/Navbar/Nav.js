import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import {userLogout} from '../../store/user.slice'
import {toggleMenu} from '../../store/menu.slice'

const Nav = ({children}) => {
  const {users} = useSelector(state => state.userReducer)
  const {menu} = useSelector(state => state.menuReducer)
  const history = useHistory()
  const dispatch = useDispatch()

  function handleLogout(userLogoutAction) {
    localStorage.removeItem('token')
    dispatch(userLogoutAction())
    history.push('/login')
  }

  function handleToggleMenu() {
    dispatch(toggleMenu(!menu.isOpen))
  }

  return (
    <div>
      <div className="relative bg-light-blue-700">
        <nav className="bg-transparent relative border-b border-teal-500 border-opacity-25 lg:bg-transparent lg:border-none">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-light-blue-800">
              <div className="px-2 flex items-center lg:px-0">
                <div className="flex-shrink-0">
                  <img
                    className="block h-8 w-auto cursor-pointer"
                    src="https://tailwindui.com/img/logos/workflow-mark-teal-400.svg"
                    alt="Workflow"
                    onClick={() => history.push('/')}
                  />
                </div>
                {users.data && users.data.role ? (
                  <div className="hidden lg:block lg:ml-6 lg:space-x-4">
                    <div className="flex">
                      <div className="bg-black bg-opacity-25 rounded-md py-2 px-3 text-sm font-medium text-white">
                        Dashboard
                      </div>

                      <div className="hover:bg-light-blue-800 rounded-md py-2 px-3 text-sm font-medium text-white">
                        Jobs
                      </div>

                      <div className="hover:bg-light-blue-800 rounded-md py-2 px-3 text-sm font-medium text-white">
                        Applicants
                      </div>

                      <div className="hover:bg-light-blue-800 rounded-md py-2 px-3 text-sm font-medium text-white">
                        Company
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="p-2 rounded-md inline-flex items-center justify-center text-light-blue-200 hover:text-white hover:bg-light-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block flex-shrink-0 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className="hidden flex-shrink-0 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:block lg:ml-4">
                <div className="flex items-center">
                  {users.data && users.data.role ? (
                    <div className="hidden lg:block lg:ml-6 lg:space-x-4">
                      <div className="flex">
                        <button className="flex-shrink-0 rounded-full p-1 text-light-blue-200 hover:bg-light-blue-800 hover:text-white focus:outline-none focus:bg-light-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-900 focus:ring-white">
                          <span className="sr-only">View notifications</span>
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                          </svg>
                        </button>

                        <div className="relative flex-shrink-0 ml-4">
                          <div>
                            <div
                              onClick={handleToggleMenu}
                              className="rounded-full flex text-sm text-white focus:outline-none focus:bg-light-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-900 focus:ring-white cursor-pointer"
                            >
                              <img
                                className="rounded-full h-8 w-8"
                                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=jHevZcgc70&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                                alt=""
                              />
                            </div>
                          </div>

                          {menu.isOpen ? (
                            <div
                              className="origin-top-right absolute z-50 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              <div className="px-4 py-3" role="none">
                                <p className="text-sm" role="none">
                                  Signed in as
                                </p>
                                <p
                                  className="text-sm font-medium text-gray-900 truncate"
                                  role="none"
                                >
                                  {users.data.email}
                                </p>
                              </div>
                              <div className="py-1" role="none">
                                <div
                                  onClick={() => history.push('profile')}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                  Account settings
                                </div>
                                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                  Support
                                </div>
                                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                  License
                                </div>
                              </div>
                              <div className="py-1" role="none">
                                <button
                                  type="submit"
                                  onClick={() => handleLogout(userLogout)}
                                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                  role="menuitem"
                                >
                                  Sign out
                                </button>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden lg:block lg:ml-6 lg:space-x-4">
                      <div className="flex">
                        <div
                          className="bg-black bg-opacity-25 block rounded-md py-2 px-3 mr-5 cursor-pointer text-base font-medium text-white"
                          onClick={() => history.push('register')}
                        >
                          Registrate
                        </div>

                        <div
                          className="hover:bg-light-blue-800 block rounded-md py-2 px-3 text-base cursor-pointer font-medium text-white"
                          onClick={() => history.push('login')}
                        >
                          Ingresar
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light-blue-900 lg:hidden" id="mobile-menu">
            <div className="pt-2 pb-3 px-2 space-y-1">
              <div className="bg-black bg-opacity-25 block rounded-md py-2 px-3 text-base font-medium text-white">
                Dashboard
              </div>

              <div className="hover:bg-light-blue-800 block rounded-md py-2 px-3 text-base font-medium text-white">
                Jobs
              </div>

              <div className="hover:bg-light-blue-800 block rounded-md py-2 px-3 text-base font-medium text-white">
                Applicants
              </div>

              <div className="hover:bg-light-blue-800 block rounded-md py-2 px-3 text-base font-medium text-white">
                Company
              </div>
            </div>
            <div className="pt-4 pb-3 border-t border-light-blue-800">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="rounded-full h-10 w-10"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=jHevZcgc70&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">Debbie Lewis</div>
                  <div className="text-sm font-medium text-light-blue-200">
                    debbielewis@example.com
                  </div>
                </div>
                <button className="ml-auto flex-shrink-0 rounded-full p-1 text-light-blue-200 hover:bg-light-blue-800 hover:text-white focus:outline-none focus:bg-light-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-900 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-3 px-2">
                <div className="block rounded-md py-2 px-3 text-base font-medium text-light-blue-200 hover:text-white hover:bg-light-blue-800">
                  Your Profile
                </div>

                <div className="block rounded-md py-2 px-3 text-base font-medium text-light-blue-200 hover:text-white hover:bg-light-blue-800">
                  Settings
                </div>

                <div className="block rounded-md py-2 px-3 text-base font-medium text-light-blue-200 hover:text-white hover:bg-light-blue-800">
                  Sign out
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {children}
    </div>
  )
}

export default Nav
