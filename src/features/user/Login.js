import React, {useState} from 'react'
import {useFormik} from 'formik'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {StatusCodes} from 'http-status-codes'

import {userLogin} from '../slices/user-slice'
import FormComponent from '../../components/Form/Form'

const UserLogin = () => {
  const [loginErrorMessage, setLoginErrorMessage] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()

  const formik = useFormik({
    initialValues: {email: '', password: ''},
    onSubmit: async values => {
      const {payload} = await dispatch(userLogin(values))

      if (payload.statusCode === StatusCodes.NOT_FOUND) {
        setLoginErrorMessage(payload.details)
      } else {
        localStorage.setItem('token', payload.data.token)
        history.push('/')
      }
    }
  })

  const {handleSubmit, handleChange, values, isSubmitting} = formik

  const formTemplate = [
    {
      name: 'email',
      type: 'text',
      value: values.email,
      placeHolder: 'Email',
      label: 'Email address',
      onChange: handleChange
    },
    {
      name: 'password',
      type: 'password',
      value: values.password,
      placeHolder: 'Password',
      label: 'Password',
      onChange: handleChange
    }
  ]

  return (
    <FormComponent
      formTemplate={formTemplate}
      isSubmitting={isSubmitting}
      handleSubmit={handleSubmit}
      textButton="Iniciar Sesión"
      loginErrorMessage={loginErrorMessage}
    />
  )
}

export default UserLogin
