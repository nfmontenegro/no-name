import API from '../config/requests'

const apiClient = async ({endpoint, method, data, headers}) => {
  const config = {url: endpoint, method, data, headers}
  const response = await API(config)
  return response.data
}

export {apiClient}
