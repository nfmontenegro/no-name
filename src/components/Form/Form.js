import Input from '../../components/Form/Input'
import Button from '../../components/Button'

import './Form.css'

const FormComponent = ({
  handleSubmit,
  formTemplate,
  textButton,
  message,
  loading,
  errors,
  isValid
}) => {
  const renderFormControl = (fields, errors) =>
    fields.map(field => {
      const inputType = ['text', 'email', 'password']
      const fieldName = field.name
      return (
        <>
          {field.type === 'select' && (
            <select
              class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              name="animals"
            >
              <option value="">Select an options</option>
              {field.values.map(option => (
                <option value={option}>{option}</option>
              ))}
            </select>
          )}
          {inputType.includes(field.type) && (
            <Input
              key={fieldName}
              name={fieldName}
              type={field.type}
              onChange={field.onChange}
              value={field.value}
              placeholder={field.placeHolder}
            />
          )}

          {errors[fieldName] ? <div>{errors[fieldName]}</div> : null}
        </>
      )
    })

  return (
    <form onSubmit={handleSubmit}>
      {message && <div>{message}</div>}
      {renderFormControl(formTemplate, errors)}
      <Button loading={loading} textButton={textButton} isValid={isValid} />
    </form>
  )
}

export default FormComponent
