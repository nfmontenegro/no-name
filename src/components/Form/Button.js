const ButtonComponent = ({color = 'blue', textButton, loading}) => (
  <button
    className="py-2 px-4 mt-6 w-full bg-light-blue-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-light-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
    type="submit"
    colorscheme={color}
    isdisabled={loading === 'loading' ? true : undefined}
  >
    {textButton}
  </button>
)
export default ButtonComponent
