import {useHistory} from 'react-router-dom'

function ButtonsActions({textButton, onClick}) {
  const history = useHistory()
  return (
    <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
      <button
        type="button"
        className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
        onClick={() => history.goBack()}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="ml-5 bg-light-blue-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-light-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
        onClick={onClick}
      >
        {textButton}
      </button>
    </div>
  )
}

export default ButtonsActions
