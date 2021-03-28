import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'

import './Form.css'

const FormComponent = ({
  handleSubmit,
  formTemplate,
  textButton,
  errorMessage,
  loading,
  errors,
  isValid
}) => {
  const renderFormControl = (fields, errors) =>
    fields.map(field => {
      const fieldName = field.name
      return (
        <>
          <Input
            key={fieldName}
            name={fieldName}
            type={field.type}
            onChange={field.onChange}
            value={field.value}
            placeholder={field.placeHolder}
          />
          {errors[fieldName] ? <div>{errors[fieldName]}</div> : null}
        </>
      )
    })

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <div>{errorMessage}</div>}
      {renderFormControl(formTemplate, errors)}
      <Button loading={loading} textButton={textButton} isValid={isValid} />
    </form>
  )
}

export default FormComponent
