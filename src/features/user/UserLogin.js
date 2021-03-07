import React from 'react'
import {useFormik} from 'formik'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {StatusCodes} from 'http-status-codes'

import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'
import {userLogin} from './userSlice'

const UserLogin = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const formik = useFormik({
    initialValues: {email: '', password: ''},
    onSubmit: async values => {
      const {payload} = await dispatch(userLogin(values))

      if (payload.statusCode === StatusCodes.NOT_FOUND) {
        console.log('Email o password incorrectos')
      }
      localStorage.setItem('token', payload.data.token)
      history.push('/')
    }
  })
  const {handleSubmit, handleChange, values, isSubmitting} = formik

  return (
    <form onSubmit={handleSubmit}>
      <h1>Formulario</h1>
      <Input name="email" onChange={handleChange} value={values.email} placeholder="Email" />
      <Input
        name="password"
        onChange={handleChange}
        value={values.password}
        placeholder="Password"
      />
      <Button loading={isSubmitting} textButton="Iniciar Sesión" />
    </form>
  )
}

export default UserLogin
