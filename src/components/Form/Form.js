import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'

import './Form.css'

const FormComponent = ({handleSubmit, formTemplate, textButton, errorMessage, loading}) => {
  const renderFormControl = fields =>
    fields.map(field => (
      <Input
        key={field.name}
        name={field.name}
        type={field.type}
        onChange={field.onChange}
        value={field.value}
        placeholder={field.placeHolder}
      />
    ))

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <div>{errorMessage}</div>}
      {renderFormControl(formTemplate)}
      <Button loading={loading} textButton={textButton} />
    </form>
  )
}

export default FormComponent
