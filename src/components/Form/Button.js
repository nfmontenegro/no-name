import {Button} from '@chakra-ui/react'

const ButtonComponent = ({color = 'blue', textButton, loading}) => (
  <Button type="submit" colorScheme={color} isDisabled={loading === 'loading' ? true : false}>
    {textButton}
  </Button>
)

export default ButtonComponent
