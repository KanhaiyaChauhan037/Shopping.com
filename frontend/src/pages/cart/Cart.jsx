import { Box, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import LaptopCart from './LaptopCart'
import MobileCart from './MobileCart'

const Cart = () => { 
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
  return (
    <Box pt={10}>
      {isLargerThan1280 ? <LaptopCart /> : <MobileCart />}
    </Box>
  )
}

export default Cart
