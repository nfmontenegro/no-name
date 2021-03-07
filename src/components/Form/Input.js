import React from 'react'
import {Input} from '@chakra-ui/react'

const InputComponent = ({placeholder, value, name, onChange, type}) => (
  <Input
    placeholder={placeholder}
    value={value}
    name={name}
    onChange={onChange}
    type={type}
    size="sm"
  />
)

export default InputComponent
