import Input from './Input'
import Button from './Button'
import Select from './Select'
import TextArea from './TextArea'

import './Form.css'
import ButtonsActions from './ActionsButtons'

const FormComponent = ({
  handleSubmit,
  formTemplate,
  textButton,
  message,
  loading,
  errors,
  isValid,
  titleSection,
  actionsButton
}) => {
  function renderFormControl(fields, errors) {
    return fields.map(field => {
      const inputType = ['text', 'email', 'password']
      const fieldName = field.name
      return (
        <div className="mt-6 flex flex-col lg:flex-row" key={fieldName}>
          <div className="flex-grow space-y-6">
            {field.type === 'select' ? (
              <Select
                fieldName={fieldName}
                fieldValues={field.values}
                onChange={field.onChange}
              />
            ) : null}

            {field.type === 'textarea' ? (
              <TextArea
                name={fieldName}
                type={field.type}
                onChange={field.onChange}
                value={field.value}
                placeholder={field.placeholder}
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

            {errors[fieldName] ? (
              <p className="mt-2 text-sm text-gray-500" id="email-description">
                {errors[fieldName]}
              </p>
            ) : null}
          </div>
        </div>
      )
    })
  }

  return (
    <form onSubmit={handleSubmit} className="divide-y divide-gray-200 lg:col-span-9 px-6">
      <div className="py-6 px-4 sm:p-6 lg:pb-8">
        {titleSection ? (
          <div>
            <h2 className="text-lg leading-6 font-medium text-gray-900">Profile</h2>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>
        ) : null}
      </div>

      {message ? <div>{message}</div> : null}

      {renderFormControl(formTemplate, errors)}

      {actionsButton ? (
        <ButtonsActions loading={loading} textButton={textButton} isValid={isValid} />
      ) : (
        <Button loading={loading} textButton={textButton} isValid={isValid} />
      )}
    </form>
  )
}

export default FormComponent
