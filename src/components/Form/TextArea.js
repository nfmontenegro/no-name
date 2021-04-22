const TextArea = ({placeHolder, value, name, onChange, type}) => (
  <textarea
    rows="4"
    cols="50"
    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
    placeholder={placeHolder}
    value={value}
    name={name}
    onChange={onChange}
    type={type}
  />
)

export default TextArea
