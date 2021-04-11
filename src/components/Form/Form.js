import Input from '../../components/Form/Input'
import Button from './Button'
import Select from './Select'

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
            <Select
              fieldName={fieldName}
              fieldValues={field.values}
              onChange={field.onChange}
            />
          )}
          {inputType.includes(field.type) && (
            <Input
              key={fieldName}
              name={fieldName}
              type={field.type}
              label={field.label}
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
