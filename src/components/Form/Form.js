import {Container, FormControl} from '@chakra-ui/react'

import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'
import Box from '../../components/Card'

import './Form.css'

const FormComponent = ({
  handleSubmit,
  isSubmitting,
  formTemplate,
  textButton,
  loginErrorMessage
}) => {
  const renderFormControl = fields =>
    fields.map(field => (
      <FormControl id={field.name} key={field.name} className="form-control">
        <Input
          name={field.name}
          type={field.type}
          onChange={field.onChange}
          value={field.value}
          placeholder={field.placeHolder}
        />
      </FormControl>
    ))

  return (
    <Container>
      <Box>
        <form onSubmit={handleSubmit}>
          {loginErrorMessage && <div>{loginErrorMessage}</div>}
          {renderFormControl(formTemplate)}
          <Button loading={isSubmitting} textButton={textButton} />
        </form>
      </Box>
    </Container>
  )
}

export default FormComponent
