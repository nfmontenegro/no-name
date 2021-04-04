import React, {useState} from 'react'
import {useFormik} from 'formik'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {StatusCodes} from 'http-status-codes'
import * as Yup from 'yup'

import {userLogin} from '../slices/user-slice'
import FormComponent from '../../components/Form/Form'
import Card from '../../components/Core/Card'

const UserLogin = () => {
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()

  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(5, 'Too short!')
      .max(10, 'Too long!')
      .required('Required')
  })

  const formik = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema: SigninSchema,
    onSubmit: async values => {
      const {payload} = await dispatch(userLogin(values))
      if (payload.statusCode && payload.statusCode !== StatusCodes.OK) {
        setMessage(payload.details)
      } else {
        localStorage.setItem('token', payload.data.token)
        history.push('/')
      }
    }
  })

  const {handleSubmit, handleChange, values, isSubmitting, errors} = formik

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
    <Card>
      <h1 class="text-2xl font-semibold text-gray-800">Ingresa a tu cuenta</h1>
      <FormComponent
        formTemplate={formTemplate}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        textButton="Iniciar Sesión"
        message={message}
        errors={errors}
      />
      <div className="flex ml-auto">
        <div
          className="inline-flex mt-2 cursor-pointer text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
          onClick={() => history.push('/register')}
        >
          No tienes cuenta?
        </div>
      </div>
    </Card>
  )
}

export default UserLogin
