const CardComponent = ({children}) => {
  return (
    <div class="shadow rounded-2xl w-64 bg-white dark:bg-gray-400 flex flex-col w-full max-w-md px-7 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      {children}
    </div>
  )
}

export default CardComponent
