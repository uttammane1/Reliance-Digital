import { Box } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Carousel";
import "react-slideshow-image/dist/styles.css";
import {
  AppleWatch,
  Card1,
  Card2,
  Headphones,
  Explore1,
  Laptops,
  Laptops2,
  Phones,
  Refrigerators,
  TV,
  BrandPromises,
} from "./Data";
import Refri from "./Refrigirator";
import Laptop from "./Laptop";
import HomeCard1 from "./HomeCard1";
import Slider3 from "./Slider3";
import Laptop2 from "./Laptop2";
import Explore from "./Explore";
import BrandPromise from "./BrandPromise";
import ImageSet from "./ImageSet";

const Home = () => {
  return (
    <div>
      {/* -----------------------------------slider1---------------------------- */}

      <Box >
        <Carousel />
      </Box>

      {/* --------------------------Home Appliances Fest------------------------- */}

      <Box boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Refri type={Refrigerators} heading="Home Appliances Fest" />
      </Box>

      {/* --------------------------------Refrigirator--------------------------- */}

      <Box boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Laptop type={Laptops} heading="HP Special - Laptops and Peripherals" />
      </Box>

      {/*------------------------------Home Appliances Card1-----------------------*/}

      <Box boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <HomeCard1 type={Card1} heading="Home Appliances Fest" />
      </Box>

      {/*------------------------------Home Appliances Card2-----------------------*/}

      <Box boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <HomeCard1 type={Card2} heading="Great Deals on Electronics" />
      </Box>

      {/*------------------------------------Slider3---------------------------------*/}

      <Box w={"100%"}>
        <Slider3 />
      </Box>

      {/*----------------------------------Brand Price------------------------------*/}

      <Box h="auto" mt={3} p={5} boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <BrandPromise
          type={BrandPromises}
          heading="THE RELIANCE DIGITAL BRAND PROMISE"
        />
      </Box>

      {/*---------------------------------Trending Laptops----------------------------------*/}

      <Box
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        mt={{ sm: "100", md: "130", lg: "120", xl: "30", base: "2" }}
      >
        <Laptop2
          type={Laptops2}
          heading="Trending Laptops"
          src="https://www.reliancedigital.in/medias/Trending-Laptops-Producst-Carousel-02-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w5MjUxN3xpbWFnZS9qcGVnfGltYWdlcy9oMjEvaGVhLzk5MzkyMDU0ODg2NzAuanBnfGU5ZWJhMjc5M2M2NDg2ZGY4NWVjYTZjYjhjMzE0MjM4ZmU5YTZjY2M3OWI1YjYyZmY4ZDlmMDlmMGZhYmMwMTE"
        />
      </Box>

      {/*---------------------------------Everyday Appliances---------------------------*/}

      <Box boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <ImageSet
          type={Phones}
          heading="iPhone Bestseller"
          src="https://www.reliancedigital.in/medias/iPhone-14-Producst-Carousel-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wzNzQyM3xpbWFnZS9qcGVnfGltYWdlcy9oYTEvaGEyLzk5NDM5NTYxMjc3NzQuanBnfGQ2Njc5NWIyNTgxMDljYWU2NjY3MmM4ZmNhMzJiOTMwNTAwNDA3MWM0ODgwNmM1ZWFhMmVhOGIyNzUwNGNlNzU"
        />
      </Box>

      {/*---------------------------------Trending in Televisions------------------------ */}

      <Box boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Laptop2
          type={TV}
          heading="Trending in Televisions"
          src="https://www.reliancedigital.in/medias/Trending-in-TVs-Producst-Carousel-02-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w5NDYyOHxpbWFnZS9qcGVnfGltYWdlcy9oNTYvaDBhLzk5MzkyMDU0MjMxMzQuanBnfGRmODcwYWI0YjUzMjA0NDBhNmQzMjNlZWE3ZGZlYzYzMThlMDBiNWI0ZWE3MzMxYzRjYmYyNGQ1OGU4NjgyNjg"
        />
      </Box>

      {/*----------------------------------Price Drop on Apple Smartwatches------------------ */}

      <Box boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <ImageSet
          type={AppleWatch}
          heading="Price Drop on Apple Smartwatches"
          src="https://www.reliancedigital.in/medias/Apple-Watch-Series-9.jpg?context=bWFzdGVyfGltYWdlc3w1MjY2NHxpbWFnZS9qcGVnfGltYWdlcy9oMjkvaDRmLzEwMTI1MTcwMjc4NDMwLmpwZ3wwYjZlODE1YmQ0ZTdmNTgzODc2M2JkMzk0ZWNlZTc0YWUwODc3ZTZjZmNlMDMyZGY1NDNmNDgxNWFkNjljOWFk"
        />
      </Box>

      {/*----------------------------------Best Selling Audio Accessories-----------------------*/}

      <Box boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Laptop2
          type={Headphones}
          heading="Best Selling Audio Accessories"
          src="https://www.reliancedigital.in/medias/Best-Selling-Audio-Accessories-Producst-Carousel-02-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w4MTEzMXxpbWFnZS9qcGVnfGltYWdlcy9oNDgvaGVmLzk5MzkyMDUyOTIwNjIuanBnfGY3YTBjMzVhNjMyYjAyMTZiODY4ZmRjYjU5OGU1YmJmMTgzNDYzNzY3MDFiYzkwY2NlMGIxOTI0MGRlOGEzZDI"
        />
      </Box>

      {/*--------------------------------EXPLORE OUR RANGE OF PRODUCTS---------------------- */}

      <Box boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Explore type={Explore1} heading="EXPLORE OUR RANGE OF PRODUCTS" />
      </Box>
    </div>
  );
};

export default Home;
