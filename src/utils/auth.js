import {useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import {StatusCodes} from 'http-status-codes'
import {Redirect} from 'react-router-dom'

import {userProfile} from '../store/user.slice'
import {toggleMenu} from '../store/menu.slice'

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

  //in each render we will hide the menu options
  useEffect(() => {
    dispatch(toggleMenu(false))
  })

  return user.statusCode === StatusCodes.UNAUTHORIZED ? (
    <Redirect to="/login" />
  ) : (
    <Component />
  )
}

export default ProtectedRoute
