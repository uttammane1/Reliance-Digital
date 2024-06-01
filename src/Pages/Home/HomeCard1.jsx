import React from "react";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const HomeCard1 = ({ type, heading}) => {
  return (
    <Box>
      <Box justifyContent="left" w="95%" m="auto" mt="6">
        <Text fontSize="2xl" textAlign={"left"}>
          {heading}
        </Text>
      </Box>
      <br />
      <br />
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        gap={6}
        w="95%"
        m="auto"
        cursor="pointer"
        overflow={"hidden"}
 
      >
        {type.map((i) => (
          <Box _hover={{transform:"scale(1.1)"}} w="50" display="block" key={uuid()}>
            <Link to={i.linked}>
              <Image src={`${i.img}`} alt={i.caption} w="100%" />
            </Link>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeCard1;