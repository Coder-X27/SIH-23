import React from 'react'
import {
    Box,
    VStack,
    Image,
    HStack,
    Text,
    Divider
} from '@chakra-ui/react';
// import bg from '../../Assets/img/homebg.jpg'
import map from '../../Assets/img/punjab.jpg'
const Home = () => {
  return (
    <>
        <Box width={"100vw"} height={'100vh'}>
            <HStack>
                <Image boxSize={'600px'} src={map}/>
                <VStack></VStack>
            </HStack>
        </Box>
    </>
  )
}

export default Home
