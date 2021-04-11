import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup'

import {updateUser} from '../slices/user-slice'
import FormComponent from '../../components/Form/Form'
import Card from '../../components/Core/Card'
import {StatusCodes} from 'http-status-codes'

const EditProfile = () => {
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()
  const {
    users: {data}
  } = useSelector(state => state.userReducer)

  const SigninSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(20, 'Too long!')
      .required('Required'),
    lastname: Yup.string()
      .min(5, 'Too short!')
      .max(10, 'Too long!')
      .required('Required'),
    phone: Yup.string()
      .min(5, 'Too short!')
      .max(10, 'Too long!')
      .required('Required')
  })

  const formik = useFormik({
    initialValues: {name: '', lastname: '', phone: ''},
    validationSchema: SigninSchema,
    onSubmit: async values => {
      const {payload} = await dispatch(updateUser({...values, userId: data.id}))
      if (payload.StatusCodes && payload.statusCodes !== StatusCodes.OK) {
        setMessage(payload.details)
      } else {
        history.push('profile')
      }
    }
  })

  const {handleSubmit, handleChange, values, isSubmitting, errors} = formik

  const formTemplate = [
    {
      name: 'name',
      type: 'text',
      value: values.name,
      placeHolder: 'Nombre',
      label: 'Nombre',
      onChange: handleChange
    },
    {
      name: 'lastname',
      type: 'text',
      value: values.lastname,
      placeHolder: 'Apellidos',
      label: 'Apellidos',
      onChange: handleChange
    },
    {
      name: 'phone',
      type: 'text',
      value: values.phone,
      placeHolder: 'Teléfono',
      label: 'Teléfono',
      onChange: handleChange
    },
    {
      name: 'bio',
      type: 'textarea',
      value: values.bio,
      placeHolder: 'Bio',
      label: 'Bio',
      onChange: handleChange
    }
  ]

  return (
    <Card>
      <h1 class="text-2xl font-semibold text-gray-800">Editar perfil</h1>
      <FormComponent
        formTemplate={formTemplate}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        textButton="Editar"
        message={message}
        errors={errors}
      />
      <div className="flex ml-auto">
        <div
          className="inline-flex mt-2 cursor-pointer text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
          onClick={() => history.push('/register')}
        ></div>
      </div>
    </Card>
  )
}

export default EditProfile
