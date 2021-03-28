import API from '../config/requests'

const apiClient = async ({endpoint, method, data}) => {
  const config = {url: endpoint, method, data}
  const response = await API(config)
  return response.data
}

export {apiClient}
