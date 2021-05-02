const ButtonComponent = ({color = 'blue', textButton, onClick}) => (
  <button
    className="ml-5 bg-light-blue-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-light-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
    type="submit"
    colorscheme={color}
    onClick={onClick}
  >
    {textButton}
  </button>
)

export default ButtonComponent
