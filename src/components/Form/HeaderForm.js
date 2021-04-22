const HeaderForm = ({title, children}) => (
  <div className="mt-28 flex items-center justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-2">
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  </div>
)

export default HeaderForm
