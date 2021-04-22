const InputComponent = ({placeholder, value, name, onChange, type}) => (
  <div className=" relative mt-4">
    <input
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      type={type}
    />
  </div>
)

export default InputComponent
