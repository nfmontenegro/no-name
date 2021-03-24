import {useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import {StatusCodes} from 'http-status-codes'
import {Redirect} from 'react-router-dom'

import {userProfile} from '../features/slices/user-slice'

const ProtectedRoute = props => {
  const {component: Component} = props
  const [user, setUser] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await dispatch(userProfile())
      setUser(response.payload)
    }
    getUserProfile()
  }, [dispatch])

  return user.statusCode === StatusCodes.UNAUTHORIZED ? (
    <Redirect to="/login" />
  ) : (
    <Component />
  )
}

export default ProtectedRoute
