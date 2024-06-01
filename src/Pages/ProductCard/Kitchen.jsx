import { useSelector, useDispatch } from "react-redux";
import { store } from "../../Redux/store";
import React, { useEffect, useState } from "react";
import { getPosts, getPostsHeadPhone, getPostsHome, getPostsKitchen, getPostsMobile, getPostsTelevisions } from "../../Redux/Products/Product.action";

import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Button,
  Divider,
  Stack,
  Heading,
  Box,
  Image,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Filters from "./Filters/Filters";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { BsHeart } from "react-icons/bs";
import Carousel from "./carousel";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { addItemCart } from "../../Redux/cart/cart.action";
import { Link } from "react-router-dom";
const Kitchen = () => {
  const { loading, error, data } = useSelector((store) => store.product);

  const [skeletonLoading,setSkeletonLoading] = useState(true)

  const dispatch = useDispatch();
  //console.log(data);
  useEffect(() => {
    setTimeout(() => {
      dispatch(getPostsKitchen());
      setSkeletonLoading(false)
    }, 5000);
   
  }, []);


  const sortByLH = () => {
    console.log("LH",data);
    return data.sort((a, b) => b.name.localeCompare(a.name));
   // console.log("d",d);
  };

  const sortByHL = () => {
    console.log("HL",data);
    
      return data.sort((a, b) => a.name.localeCompare(b.name));
   
  };
 
 

  return (
    <>
      <div style={{  marginBottom: "20px" }}>
        <Carousel />
      </div>

      <div></div>
      <div style={{ display: "flex", justifyContent:"space-around"}}>
        <div id="filters" >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              padding: "10px",
            }}
          >
            Filters
          </h1>
         <Filters data={data}/>
        </div>
        <div id="titleBar" >
          <div style={{ display: "flex", justifyContent:"space-between",height:"80px",alignItems:"center",marginBottom:"5px",padding:"10px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
          <div>
          <h1
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
         Kitchen
        </h1>
        <span>(Showing 1-{data.length} results of total Products )</span>
          </div>
          <div id="sortButtonContainer" ><b> Sort By :</b>{" "}{" "}
          <button id="sortingButton">Relevance</button>
          <button onClick={sortByLH} id="sortingButton" >Low to High</button>
          <button onClick={sortByHL} id="sortingButton">High to Low</button>
        </div>
        </div>
          
        {skeletonLoading  ? 
          
       ( <div id="productCards">
       <div>
       <Skeleton highlightColor="" height={140} />
     <h1><Skeleton/></h1>
     <h1><Skeleton/></h1>
     <p><Skeleton/></p>
     <h1><Skeleton height={50}/></h1>
     </div>
     <div>
     <Skeleton height={140} />
   <h1><Skeleton/></h1>
   <h1><Skeleton/></h1>
   <p><Skeleton/></p>
   <h1><Skeleton height={50}/></h1>
   </div>
   <div>
   <Skeleton height={140} />
 <h1><Skeleton/></h1>
 <h1><Skeleton/></h1>
 <p><Skeleton/></p>
 <h1><Skeleton height={50}/></h1>
 </div>
 <div>
 <Skeleton height={140} />
<h1><Skeleton/></h1>
<h1><Skeleton/></h1>
<p><Skeleton/></p>
<h1><Skeleton height={50}/></h1>
</div>
<div>
<Skeleton height={140} />
<h1><Skeleton/></h1>
<h1><Skeleton/></h1>
<p><Skeleton/></p>
<h1><Skeleton height={50}/></h1>
</div>
<div>
<Skeleton height={140} />
<h1><Skeleton/></h1>
<h1><Skeleton/></h1>
<p><Skeleton/></p>
<h1><Skeleton height={50}/></h1>
</div>
<div>
<Skeleton height={140} />
<h1><Skeleton/></h1>
<h1><Skeleton/></h1>
<p><Skeleton/></p>
<h1><Skeleton height={50}/></h1>
</div>
<div>
<Skeleton height={140} />
<h1><Skeleton/></h1>
<h1><Skeleton/></h1>
<p><Skeleton/></p>
<h1><Skeleton height={50}/></h1>
</div>
<div>
<Skeleton height={140} />
<h1><Skeleton/></h1>
<h1><Skeleton/></h1>
<p><Skeleton/></p>
<h1><Skeleton height={50}/></h1>
</div>
<div>
<Skeleton height={140} />
<h1><Skeleton/></h1>
<h1><Skeleton/></h1>
<p><Skeleton/></p>
<h1><Skeleton height={50}/></h1>
</div>
<div>
<Skeleton height={140} />
<h1><Skeleton/></h1>
<h1><Skeleton/></h1>
<p><Skeleton/></p>
<h1><Skeleton height={50}/></h1>
</div>
<div>
<Skeleton height={140} />
<h1><Skeleton/></h1>
<h1><Skeleton/></h1>
<p><Skeleton/></p>
<h1><Skeleton height={50}/></h1>
</div>
     </div>)
        :
        
        (<div id="productCards">
          {data.map((product) => (
            <Link to={`kitchen/${product.id}`}>
            <Card  variant="outline" key={product.id} id="Productcard" _hover={{boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}}>
              <CardBody id="productBody">
                <Image
                  mt="-5"
                  src={product.img}
                  alt="Product image"
                  borderRadius="lg"
                />

                <Stack spacing="1">
                  <Text
                    color="blue.700"
                    fontSize={"medium"}
                    _hover={{ color: "red" }}
                    id="cardTitle"
                  >
                    {product.name}
                  </Text>
                  <Stack direction="row">
                    <Text
                      color="gray.600"
                      fontSize="smaller"
                      fontWeight={"bold"}
                    >
                      {" "}
                      <span>&#8377;</span>
                      {product.mrp}
                    </Text>
                    <Text
                      color="gray.500"
                      fontSize="smaller"
                      fontWeight={"bold"}
                    >
                      <s>
                        <span>&#8377;</span>
                        {product.mrp}{" "}
                      </s>{" "}
                    </Text>
                    <Text
                      color="green.600"
                      fontSize="x-small"
                      fontWeight={"bold"}
                    >
                      {" "}
                      <span>&#8377;</span>
                      {product.discount}
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    <Badge
                      variant="outline"
                      colorScheme="green"
                      borderRadius={"15px"}
                      padding={"0px 10px 0px 10px"}
                    >
                      OFFERS AVAILABLE
                    </Badge>
                    <Badge
                      variant="outline"
                      colorScheme="green"
                      borderRadius={"15px"}
                      padding={"0px 10px 0px 10px"}
                    >
                      CASHBACK
                    </Badge>
                  </Stack>
                </Stack>
              </CardBody>
              <Divider />
              <br />
              <CardFooter
                justify="space-between"
                alignItems={"center"}
                height={"20px"}
                mt="-4"
              >
                <Button flex="1" variant="ghost">
                  {
                    <Stack direction="row" align={"center"} fontWeight={""}>
                      <input
                        type="checkbox"
                        name="compare-btn"
                        id="compare-btn"
                      />
                      <label>Compare</label>
                    </Stack>
                  }
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BsHeart />}>
                  Wishlist
                </Button>
              </CardFooter>
            </Card>
            </Link>
          ))}
                
        </div>)}
        </div>
      </div>
    </>
  );
};

export default Kitchen;
