import {useState} from 'react'
import {useFormik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'

import FormComponent from '../../components/Form/Form'
import Card from '../../components/Card'
import {userRegisterAction} from '../slices/user-slice'
import {StatusCodes} from 'http-status-codes'

const UserRegister = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()
  const userState = useSelector(state => state.userReducer.users)

  const formik = useFormik({
    initialValues: {name: '', lastname: '', email: '', password: ''},
    onSubmit: async values => {
      const {payload} = await dispatch(userRegisterAction(values))

      if (payload.statusCode && payload.statusCode !== StatusCodes.CREATED) {
        setErrorMessage(payload.details)
      }
      console.log('@@ REGISTRADO')
    }
  })

  const {handleSubmit, handleChange, values} = formik

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
    <div className="mt-32">
      <div className="grid justify-items-stretch">
        <div className="justify-self-center">
          <Card>
            <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
              Registrate
            </div>
            <FormComponent
              formTemplate={formTemplate}
              handleSubmit={handleSubmit}
              textButton="Registrarse"
              loading={userState.status}
              errorMessage={errorMessage}
            />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default UserRegister
