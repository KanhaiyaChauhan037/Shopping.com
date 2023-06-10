import { useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import LaptopCheckout from './LaptopCheckout'
import MobileCheckout from './MobileCheckout'

const Checkout = () => {
    const [isLargerThan1280] = useMediaQuery('(min-width: 880px)')
  return (
    <div>
      {isLargerThan1280 ? <LaptopCheckout/> : <MobileCheckout />}
    </div>
  )
}

export default Checkout
