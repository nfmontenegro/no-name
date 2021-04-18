import React, {useState} from 'react'
import {useFormik} from 'formik'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {StatusCodes} from 'http-status-codes'
import * as Yup from 'yup'

import {userLogin} from '../store/user.slice'
import FormComponent from '../components/Form/Form'
import HeaderForm from '../components/Form/HeaderForm'

const UserLogin = () => {
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()

  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email not valid')
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
      placeHolder: 'Email address',
      onChange: handleChange
    },
    {
      name: 'password',
      type: 'password',
      value: values.password,
      placeHolder: 'Password',
      onChange: handleChange
    }
  ]

  return (
    <HeaderForm title="Sing in to your account">
      <FormComponent
        formTemplate={formTemplate}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        textButton="Iniciar Sesión"
        message={message}
        errors={errors}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <div className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </div>
        </div>
      </div>
    </HeaderForm>
  )
}

export default UserLogin
