import React from 'react'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox, Container, Flex, Grid, GridItem, Image, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react'

const PriceRange = () => {
  return (
  
    
    <Flex>
    <Box width={"100%"} borderRight="1px solid #D3D3D3">
    <VStack  divider={<StackDivider borderColor='gray.200' />}  spacing={4}  align='stretch'>
    
    <Box>
        <VStack>
            <Text>Price</Text>
            <RangeSlider  aria-label={['min', 'max']} width = "90%" m="auto"  defaultValue={[0,100]} >
                <RangeSliderTrack>
                    <RangeSliderFilledTrack background={"#003380"}/>
                </RangeSliderTrack>
                    <RangeSliderThumb index={0} backgroundColor="#e42529"/>
                    <RangeSliderThumb index={1} backgroundColor="#e42529"/>
            </RangeSlider>
            <Flex justifyContent={"space-between"} width="95%" m="auto"><Text>₹499</Text><Text>₹46999</Text></Flex>
            <br/>
            <Flex flexDirection={["column","column","row"]} gap = "10px" width={"95%"} m="auto" alignItems={"center"}>
                <Input borderColor={"blue"} placeholder="499"/>
                <Text>To</Text>
                <Input  borderColor={"blue"} placeholder="9999"/>{" "}
                <Button background={"#003380"} color={"white"} colorScheme="none">GO</Button>
            </Flex>
        </VStack>
    </Box>
    
    <VStack alignItems="flex-start" paddingLeft="10px">
        <Text>Availability</Text>
        <Flex gap="1rem">
        <Checkbox />
        <Text>Exclude out of Stock</Text>
        </Flex>
     </VStack>
     <VStack alignItems="flex-start" paddingLeft="10px">
        <Text>Category</Text>
        <Flex gap="1rem">
        <Checkbox />
        <Text>Laptops</Text>
        </Flex>
     </VStack>
     <VStack alignItems="flex-start" paddingLeft="10px">
        <Text>Category</Text>
        <Flex gap="1rem" > <Checkbox />
        <Text>Lenovo</Text>
        </Flex>
        <Flex gap="1rem">
        <Checkbox />
        <Text>Acer</Text>
        </Flex>
        <Flex gap="1rem">
        <Checkbox />
        <Text>Hp</Text>
        </Flex>
     </VStack>
    </VStack>
    </Box>
    </Flex>
    
  )
}

export default PriceRange
