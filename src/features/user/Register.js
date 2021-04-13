import React, {useState} from 'react'
import {useFormik} from 'formik'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import * as Yup from 'yup'

import FormComponent from '../../components/Form/Form'
import Card from '../../components/Core/Card'
import {userRegisterAction} from '../slices/user-slice'
import {StatusCodes} from 'http-status-codes'

const UserRegister = () => {
  const [message, setMessage] = useState(null)
  const history = useHistory()
  const dispatch = useDispatch()

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
    lastname: Yup.string()
      .min(2, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
    username: Yup.string()
      .min(2, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
    phone: Yup.string()
      .min(8, 'Too short!')
      .max(8, 'Too long!'),
    gender: Yup.string().required('Género es requerido'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(5, 'Too short!')
      .max(10, 'Too long!')
      .required('Required')
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      username: '',
      gender: '',
      phone: ''
    },
    validationSchema: SignupSchema,
    onSubmit: async values => {
      console.log('>> Values: ', values)
      const {payload} = await dispatch(userRegisterAction(values))

      if (payload.statusCode && payload.statusCode !== StatusCodes.CREATED) {
        setMessage(payload.details)
      } else {
        setMessage('Registrado exitosamente!')
      }
    }
  })

  const {handleSubmit, handleChange, values, isSubmitting, errors} = formik

  const formTemplate = [
    {
      name: 'name',
      type: 'text',
      values: values.name,
      placeHolder: 'Nombre',
      label: 'Nombre',
      onChange: handleChange
    },
    {
      name: 'lastname',
      type: 'text',
      values: values.lastname,
      placeHolder: 'Apellido',
      label: 'Apellido',
      onChange: handleChange
    },
    {
      name: 'username',
      type: 'text',
      values: values.username,
      placeHolder: 'username',
      label: 'Username',
      onChange: handleChange
    },
    {
      name: 'phone',
      type: 'text',
      values: values.phone,
      placeHolder: 'Teléfono',
      label: 'Teléfono',
      onChange: handleChange
    },
    {
      name: 'gender',
      type: 'select',
      values: ['male', 'female'],
      placeHolder: 'Género',
      label: 'Género',
      onChange: handleChange
    },
    {
      name: 'email',
      type: 'email',
      values: values.email,
      placeHolder: 'Email',
      label: 'Email',
      onChange: handleChange
    },
    {
      name: 'password',
      type: 'password',
      values: values.password,
      placeHolder: 'Password',
      label: 'Password',
      onChange: handleChange
    }
  ]

  return (
    <Card title="Register your account">
      <FormComponent
        formTemplate={formTemplate}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        textButton="Registrarse"
        message={message}
        errors={errors}
      />

      <div className="flex items-center justify-between">
        <div className="text-sm">
          <div
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={() => history.push('login')}
          >
            Already have account?
          </div>
        </div>
      </div>
    </Card>
  )
}

export default UserRegister
