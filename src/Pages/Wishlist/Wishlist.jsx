import {
  Heading, 
  Input,
  InputGroup,
  InputLeftElement, 
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import wsh from "./wish.module.css";
import { FaPlus } from 'react-icons/fa';
import { PhoneIcon } from "@chakra-ui/icons";

let arr = [
  {
      "name": "HP 14s-dr3001TU Laptop (Intel Pentium Silver N6000/8 GB/256 GB SSD/UHD Graphics/Windows 11 Home/MSO/HD), 35.6 cm (14 inch)",
      "img": "https://www.reliancedigital.in/medias/Hp-681Y7PA-ACJ-Laptop-493178767-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjAxOXxpbWFnZS9qcGVnfGltYWdlcy9oYTQvaDU2Lzk5MjM5NDA2MTQxNzQuanBnfGEzZDE5OGQxNmY4M2FkMGUxODU2OTg4MDdkOTFkMmZlYmJmZjdiMDAzZTVhYzBiZmVmNThiMmYwYzhmMTkyNGI",
      "price": "32,999.00",
      "mrp": "37,000.00",
      "discount": "11%(₹4,001)",
      "id": 1
  },
  {
      "name": "Philips BT3102/15 cordless rechargeable Beard Trimmer - 10 length settings, 60 min run time",
      "img": "https://www.reliancedigital.in/medias/Philips-BT3102-15-Shaver-and-Trimmers-491891822-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTE5NHxpbWFnZS9qcGVnfGltYWdlcy9oMjAvaDJmLzkzMzI2NjMxMjM5OTguanBnfDcwNDg1ZTA4OTg0MzllNzFjMDU3MDk2N2Q3NWJmMTUzZGE1MzZlOGNhY2VjZjllOTU3OTM2YjFkZDYzOGJkZWQ",
      "price": "1,249.00",
      "mrp": "1,495.00",
      "discount": "16%(₹246)",
      "id": 2
  },
  {
      "name": "Philips BT3102/15 cordless rechargeable Beard Trimmer - 10 length settings, 60 min run time",
      "img": "https://www.reliancedigital.in/medias/Philips-BT3102-15-Shaver-and-Trimmers-491891822-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTE5NHxpbWFnZS9qcGVnfGltYWdlcy9oMjAvaDJmLzkzMzI2NjMxMjM5OTguanBnfDcwNDg1ZTA4OTg0MzllNzFjMDU3MDk2N2Q3NWJmMTUzZGE1MzZlOGNhY2VjZjllOTU3OTM2YjFkZDYzOGJkZWQ",
      "price": "1,249.00",
      "mrp": "1,495.00",
      "discount": "16%(₹246)",
      "id": 3
  }
]

const Wishlist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      setData(arr);
  }, [])

  return (
      <div className={wsh.container}>
          <Tabs
              display={{ base: "grid", lg: "flex" }}
              w="90%"
              alignItems={"baseline"}
              textAlign={"left"}
              gap="2px"
              border="1px solid #a2a2a2"
              p="0"
          >
              <TabList
                  display={{ base: "none", lg: "grid" }}
                  m="0"
                  p="20px"
                  h="100%"
                  border="0"
              >
                  <div className={wsh.myinfo}>
                      <h2> Uttam </h2>
                      <p> uttammaneofficial@gmail.com </p>
                  </div>
                  <Text>
                      <Tab
                          border="0"
                          color="black"
                          fontSize={"sm"}
                          ml="0"
                          fontWeight="bold"
                          p="0"
                          _active={{ backgroundColor: "unset" }}
                      >
                          My Account
                      </Tab>
                  </Text>
                  <Text>
                      <Tab
                          border="0"
                          color="black"
                          fontSize={"sm"}
                          ml="30"
                          p="0"
                          _active={{ backgroundColor: "unset" }}
                          _hover={{ fontWeight: "bold" }}
                      >
                          My Profile
                      </Tab>
                  </Text>
                  <Text>
                      <Tab
                          border="0"
                          color="black"
                          fontSize={"sm"}
                          ml="30"
                          p="0"
                          _active={{ backgroundColor: "unset" }}
                          _hover={{ fontWeight: "bold" }}
                      >
                          My Wishlist
                      </Tab>
                  </Text>
                  <Text>
                      <Tab
                          border="0"
                          color="black"
                          fontSize={"sm"}
                          ml="30"
                          p="0"
                          _active={{ backgroundColor: "unset" }}
                          _hover={{ fontWeight: "bold" }}
                      >
                          My Order
                      </Tab>
                  </Text>
                  <Text>
                      <Tab
                          border="0"
                          color="black"
                          fontSize={"sm"}
                          ml="30"
                          p="0"
                          _active={{ backgroundColor: "unset" }}
                          _hover={{ fontWeight: "bold" }}
                      >
                          My Address
                      </Tab>
                  </Text>
                  <Text>
                      <Tab
                          border="0"
                          color="black"
                          fontSize={"sm"}
                          ml="30"
                          p="0"
                          _active={{ backgroundColor: "unset" }}
                          _hover={{ fontWeight: "bold" }}
                      >
                          My Points
                      </Tab>
                  </Text>
                  <Text>
                      <Tab
                          border="0"
                          color="black"
                          fontSize={"sm"}
                          ml="30"
                          p="0"
                          _active={{ backgroundColor: "unset" }}
                          _hover={{ fontWeight: "bold" }}
                      >
                          My Credit
                      </Tab>
                  </Text>
              </TabList>

              <TabPanels>
                  <TabPanel>
                      <div>
                          <div className={wsh.heading}>
                              <h3> My Account </h3>
                          </div>
                          <div className={wsh.option}>
                              <div>
                                  <div>
                                      <h3> Uttam's Profile </h3>
                                      <p> uttammaneofficial@gmail.com </p>
                                  </div>
                                  <img
                                      src="https://www.reliancedigital.in/build/client/images/my-account/my_profile.jpg"
                                      alt=""
                                  />
                              </div>
                              <div>
                                  <div>
                                      <h3> My Order </h3>
                                      <p> Track your order and history </p>
                                  </div>
                                  <img
                                      src="https://www.reliancedigital.in/build/client/images/my-account/my-orders.jpg"
                                      alt="img2"
                                  />
                              </div>
                              <div>
                                  <div>
                                      <h3> My Address </h3>
                                      <p> Add, Edit your address </p>
                                  </div>
                                  <img
                                      src="https://www.reliancedigital.in/build/client/images/my-account/my-address.jpg"
                                      alt="img2"
                                  />
                              </div>
                              <div>
                                  <div>
                                      <h3> My Wishlist </h3>
                                      <p> Create, Edit and custom Wishlist </p>
                                  </div>
                                  <img
                                      src="https://www.reliancedigital.in/build/client/images/my-account/my-wishlist.jpg"
                                      alt="img2"
                                  />
                              </div>
                              <div>
                                  <div>
                                      <h3> ROne Loyalty Points </h3>
                                      <p> Review your loyalty points </p>
                                  </div>
                                  <img
                                      src="https://www.reliancedigital.in/build/client/images/my-account/rone-points.jpeg"
                                      alt="img2"
                                  />
                              </div>
                              <div>
                                  <div>
                                      <h3> My Credit </h3>
                                      <p> Review your store point </p>
                                  </div>
                                  <img
                                      src="https://www.reliancedigital.in/build/client/images/my-account/my-credit.jpg"
                                      alt="img2"
                                  />
                              </div>
                          </div>
                      </div>
                  </TabPanel>
                  <TabPanel>
                      <div>
                          <div className={wsh.heading}>
                              <h3> My Profile </h3>
                          </div>
                          <div className={wsh.userdetail}>
                              <div>
                                  <Heading size="sm" w="100px" > Name: </Heading>
                                  <Input type="text" w={"200px"} placeholder='Tushit Saxena' />
                              </div>
                              <div>
                                  <Heading size="sm" w="100px" > Email </Heading>
                                  <Input type="text" w={"200px"} placeholder='tushitSaxena4@gmail.com' />
                              </div>
                              <div>
                                  <Heading size="sm" w="100px" > Phone no.  </Heading>
                                  <InputGroup>
                                      <InputLeftElement
                                          pointerEvents='none'
                                          children={<PhoneIcon color='gray.300' />}
                                      />
                                      <Input type='tel' w={"200px"} placeholder='9009009013' />
                                  </InputGroup>
                              </div> 
                          </div>
                      </div>
                  </TabPanel>
                  <TabPanel>
                      <div>
                          <div className={wsh.heading}>
                              <h3> My WishList </h3>
                          </div>
                          <div className={wsh.appendingdata}>
                              {data.map((el) => (
                                  <div key={el.id} className={wsh.proinfobox}>
                                      <div className={wsh.productbox} >
                                          <div>
                                              <img src={el.img} alt="Product images" className={wsh.cartimg} />
                                          </div>
                                          <div>
                                              <h3>{el.name}</h3>
                                              <h5> <FaPlus size="12" className={wsh.plslogo} /> <span> RECOMMENDED SERVICES/WARRANTY </span> </h5>
                                          </div>
                                          <div id={wsh.mxm}>
                                              <h2> ₹{el.price} </h2>
                                              <h2 id={wsh.strikethrough}> M.R.P: <i style={{ textDecoration: "line-through" }}> {el.mrp} </i> <span> Inclusive of all taxes </span> </h2>
                                              <h2 id={wsh.ships}> Free Shipping </h2>
                                              <h2 id={wsh.gov}> *Delivery assurance is subject to our delivery locations staying open as per govt. regulations </h2>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </TabPanel>
              </TabPanels>
          </Tabs>
      </div>
  );
};

export default Wishlist;
 
