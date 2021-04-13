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
  function renderFormControl(fields, errors) {
    return fields.map(field => {
      const inputType = ['text', 'email', 'password']
      const fieldName = field.name
      return (
        <div key={fieldName}>
          {field.type === 'select' ? (
            <Select
              fieldName={fieldName}
              fieldValues={field.values}
              onChange={field.onChange}
            />
          ) : null}

          {inputType.includes(field.type) ? (
            <Input
              name={fieldName}
              type={field.type}
              onChange={field.onChange}
              value={field.value}
              placeholder={field.placeHolder}
            />
          ) : null}

          {errors[fieldName] ? <div key={fieldName}>{errors[fieldName]}</div> : null}
        </div>
      )
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {message && <div>{message}</div>}
      {renderFormControl(formTemplate, errors)}
      <Button loading={loading} textButton={textButton} isValid={isValid} />
    </form>
  )
}

export default FormComponent
