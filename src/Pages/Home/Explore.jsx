import React from "react";
import { Box, Text, Image, Square, Center, Grid } from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import ViewButton from "./ViewButton";

const Explore = ({ type, heading }) => {
  return (
    <Box
      justifyContent="left"
      m="auto"
      mt="6"
      backgroundColor="#f7f7f7"
      cursor="pointer"
      padding={4}
      mb={5}
    >
      <Center>
        <Text fontSize="2xl" fontWeight="bold" mt="5">
          {heading}
        </Text>
      </Center>
      <br />
      <br />
      <Box mt="1">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <Grid templateColumns="repeat(5, 1fr)" gap={6} w="90%" m="auto">
            {type.map((i) => (
              <Box key={uuid()}>
                <SwiperSlide>
                  <Box overflow={"hidden"}>
                    <Link to={i.linked}>
                      <Square m="auto" _hover={{transform:"scale(1.1)"}}>
                        <Image
                          src={`${i.img}`}
                          alt={i.caption}
                          boxSize="170px"
                        />
                      </Square>
                      <br />
                      <br />
                      <Center>
                        <Text fontSize="xl" _hover={{ color: "#003380" }}>
                          {i.categories}
                        </Text>
                      </Center>
                    </Link>
                  </Box>
                </SwiperSlide>
              </Box>
            ))}
          </Grid>
        </Swiper>
      </Box>
      <Center>
        <ViewButton />
      </Center>
    </Box>
  );
};

export default Explore;
