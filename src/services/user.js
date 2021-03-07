import API from '../config/API'

const signinUser = async formData => {
  const options = {
    method: 'POST',
    url: 'signin',
    data: formData
  }

  const response = await API(options)
  return response.data
}

export {signinUser}
