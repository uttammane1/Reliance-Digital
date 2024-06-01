import { Box,Button, } from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom'



const EmptyCart = () => {
  return (
    <div>
        <Box  display= "flex" flexDirection={"column"} alignItems = "center">
            <img mt={20}   src='https://www.buy.airoxi.com/img/empty-cart-1.png' alt='cart'/>
            <Link to="/computer">
                <Button colorScheme={"none"} borderRadius={0} mt={12} mb={20} bgColor={"rgb(37,47,100)"} color = "white">GO TO SHOPPING</Button>
            </Link>
        </Box>
    </div>
  )
}

export default EmptyCart