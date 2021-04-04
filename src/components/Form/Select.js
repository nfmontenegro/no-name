const Select = ({fieldName, fieldValues, onChange}) => (
  <div className="mt-6">
    <label className="text-gray-700 mb-8">{fieldName}</label>
    <select
      className="block  w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
      name={fieldName}
      onChange={onChange}
    >
      <option value="">Select an options</option>
      {fieldValues.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
)

export default Select
