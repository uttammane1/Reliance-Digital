import React from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Heading from "./Heading";
import SliderFormat from "./SliderFormat";

const ImageSet = ({ type, heading, src }) => {
  return (
    <Box justifyContent="left" w="95%" m="auto" mt="6" cursor="pointer">
      <Heading heading={heading} />
      <Flex mt="7"  overflow={"hidden"}>
        <Box
          w={{ sm: "100%", md: "100%", lg: "100%", xl: "70%", base: "100%" }}
        >
          <SliderFormat type={type} />
        </Box>
        <Spacer />
        <Box
          boxSize="sm"
          _hover={{transform:"scale(1.1)"}}
          w={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "30%",
            base: "none",
          }}
        >
          <Image
            src={src}
            boxSize="340px"
            border="1px"
            borderColor="gray.200"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ImageSet;
