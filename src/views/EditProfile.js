import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
  ViewGridAddIcon
} from '@heroicons/react/outline'

import {updateUser} from '../store/user.slice'
import FormComponent from '../components/Form/Form'
import {StatusCodes} from 'http-status-codes'

const EditProfile = () => {
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()
  const {
    users: {data}
  } = useSelector(state => state.userReducer)

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const EditProfileSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(20, 'Too long!'),
    lastname: Yup.string()
      .min(5, 'Too short!')
      .max(30, 'Too long!'),
    phone: Yup.string()
      .min(5, 'Too short!')
      .max(10, 'Too long!'),
    bio: Yup.string().min(5, 'Too short!')
  })

  const {name, lastname, phone, bio} = data || {}
  const formik = useFormik({
    initialValues: {
      name,
      lastname,
      phone,
      bio
    },
    validationSchema: EditProfileSchema,
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
      onChange: handleChange
    },
    {
      name: 'lastname',
      type: 'text',
      value: values.lastname,
      placeHolder: 'Apellidos',
      onChange: handleChange
    },
    {
      name: 'phone',
      type: 'text',
      value: values.phone,
      placeHolder: 'Teléfono',
      onChange: handleChange
    },
    {
      name: 'bio',
      type: 'textarea',
      value: values.bio,
      placeHolder: 'Bio',
      onChange: handleChange
    }
  ]

  const subNavigation = [
    {name: 'Profile', href: '#', icon: UserCircleIcon, current: true},
    {name: 'Account', href: '#', icon: CogIcon, current: false},
    {name: 'Password', href: '#', icon: KeyIcon, current: false},
    {name: 'Notifications', href: '#', icon: BellIcon, current: false},
    {name: 'Billing', href: '#', icon: CreditCardIcon, current: false},
    {name: 'Integrations', href: '#', icon: ViewGridAddIcon, current: false}
  ]

  const titleSection = {
    title: 'Profile',
    information:
      'This title information will be displayed publicity so be careful what you share.'
  }

  const renderSubNavigation = () => (
    <aside className="py-6 lg:col-span-3">
      <nav className="space-y-1">
        {subNavigation.map(item => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700'
                : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900',
              'group border-l-4 px-3 py-2 flex items-center text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            <item.icon
              className={classNames(
                item.current
                  ? 'text-teal-500 group-hover:text-teal-500'
                  : 'text-gray-400 group-hover:text-gray-500',
                'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
              )}
              aria-hidden="true"
            />
            <span className="truncate">{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  )

  return (
    <main className="relative mt-10">
      <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
            {renderSubNavigation()}
            <FormComponent
              formTemplate={formTemplate}
              isSubmitting={isSubmitting}
              handleSubmit={handleSubmit}
              textButton="Save changes"
              message={message}
              errors={errors}
              titleSection={titleSection}
              actionsButton={true}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default EditProfile
