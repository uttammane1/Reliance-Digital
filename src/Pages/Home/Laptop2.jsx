import React from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Heading from "./Heading";
import SliderFormat from "./SliderFormat";

const Laptop2 = ({ type, heading, src }) => {
  return (
    <Box justifyContent="left" w="95%" m="auto"  cursor="pointer">
        
      <Heading heading={heading} />
      <Flex mt="7" overflow={"hidden"}>
        <Box
          boxSize="sm"
          _hover={{transform:"scale(1.1)"}}
          w={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "40%",
            base: "none",
          }}
          cursor="pointer"
          pr="4"
        >
          <Image
            src={src}
            boxSize="340px"
            border="1px"
            borderColor="gray.200"
            w={{
              xs: "80%",
              sm: "80%",
              md: "80%",
              lg: "400px",
              xl: "400px",
              base: "none",
            }}
          />
        </Box>
        <Spacer />
        <Box
          w={{ sm: "100%", md: "100%", lg: "100%", xl: "75%", base: "100%" }}
        >
          <SliderFormat type={type} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Laptop2;
