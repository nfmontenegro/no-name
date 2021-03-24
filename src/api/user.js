import API from '../config/requests'

const signinUser = async formData => {
  const options = {
    method: 'POST',
    url: 'signin',
    data: formData
  }

  const response = await API(options)
  return response.data
}

const me = async () => {
  const options = {
    method: 'GET',
    url: '/users/me'
  }
  const response = await API(options)
  return response.data
}

const registerUser = async formData => {
  const options = {
    method: 'POST',
    url: '/signup',
    data: formData
  }
  const response = await API(options)
  return response.data
}
export {signinUser, me, registerUser}
