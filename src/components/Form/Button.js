import {Button} from '@chakra-ui/react'

const ButtonComponent = ({color = 'blue', action, textButton, loading}) => (
  <Button
    colorScheme={color}
    onClick={action}
    isDisabled={loading === 'loading' ? true : false}
  >
    {textButton}
  </Button>
)

export default ButtonComponent
