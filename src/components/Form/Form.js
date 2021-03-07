import React from 'react'
import {Container, FormControl, FormLabel, InputGroup} from '@chakra-ui/react'

import Input from '../../components/Form/Input'
import Box from '../../components/Card'

const FormComponent = ({handleSubmit, formTemplate, children}) => {
  const renderFormControl = fields =>
    fields.map(field => (
      <FormControl id={field.name} key={field.name}>
        <FormLabel size>{field.label}</FormLabel>
        <InputGroup size="md">
          <Input
            name={field.name}
            type={field.type}
            onChange={field.onChange}
            value={field.value}
            placeholder={field.placeHolder}
          />
        </InputGroup>
      </FormControl>
    ))

  return (
    <Container>
      <Box>
        <form onSubmit={handleSubmit}>
          {renderFormControl(formTemplate)}
          {children}
        </form>
      </Box>
    </Container>
  )
}

export default FormComponent
