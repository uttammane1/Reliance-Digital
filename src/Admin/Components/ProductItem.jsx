import React from 'react'
import { CheckCircleIcon, DeleteIcon, } from "@chakra-ui/icons";
import {
  Box,
  Circle,
  Flex,
  Text,

  Image,
  useToast,
 
} from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { deleteAdminProducts, getAdminProducts } from '../../Redux/admin/admin.action';

const ProductItem = ({img,id,name,price}) => {
  const toast = useToast()

    const dispatch = useDispatch();

    const handleDelete = (id) => {
      toast({
          position: 'bottom-center',
          duration: 1200,
          render: () => (
              <Flex color='white' border="4px solid white" p={"10px"} bgColor='green.400' borderRadius={"15px"}>
                  <CheckCircleIcon w={30} h={30} /><Text size="lg" ml="15px">{`${name} has been deleted!`}</Text>
              </Flex>

          ),
      })

      dispatch(deleteAdminProducts(id))
      dispatch(getAdminProducts())

  }

  return (
    <div>
    <Flex
    w="100%"
    justify="space-between"
    pt="20px"
    pb={"20px"}
    gap={"20px"}
    borderBottom="1px solid gainsboro"
    alignItems={"center"}
  >
    <Image
      display="block"
      borderRadius={"15px"}
      src={img}
      w="100px"
    />
    <Box w="50%">
      <Text noOfLines={1} fontSize={"20px"} mb="20px">
       {name}
      </Text>
      <Text fontSize={"15px"} mb="20px">{`Brand: HP`}</Text>
   
        <Text fontWeight={"bold"}>{`Rs. ${price}`}</Text>
        
  
    </Box>
    <Box onClick={() => handleDelete(id)}>
      <Circle
        as="button"
        bgColor="#f1f1f1"
        display="flex"
        justifyContent="center"
        alignItems ="center"
        w="30px"
        p={["1", "1", "2"]}
      >
        <DeleteIcon
          boxSize="1em"
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
      </Circle>
    </Box>
  </Flex>
    </div>
  )
}

export default ProductItem