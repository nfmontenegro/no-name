import React from 'react'
import {Box} from '@chakra-ui/react'

const CardComponent = ({children}) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CardComponent
