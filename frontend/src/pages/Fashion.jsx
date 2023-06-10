import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import NormalNav from '../components/NormalNav'

const Fashion = () => {
  return (
    <Box pt={10}>
      <NormalNav />
    <Center mt={10}>
        <Image width={"800px"} src='https://i.postimg.cc/Xq40GD94/no-data-png.png' />
    </Center>
    </Box>
  )
}

export default Fashion
