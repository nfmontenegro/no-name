import React from 'react'
import {Input} from '@chakra-ui/react'

const InputComponent = ({placeholder, value, name, onChange}) => (
  <Input placeholder={placeholder} value={value} name={name} onChange={onChange} />
)

export default InputComponent
