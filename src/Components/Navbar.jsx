import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { BsCartFill, BsFillFilePlusFill, BsFillMicFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { CheckCircleIcon, Search2Icon, WarningIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import { Hamburger } from "./NavComponents/Hamburger";
import Dropdown from "./NavComponents/Dropdown";
import {Link as RouterLink} from "react-router-dom"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../Redux/auth/auth.action";



export const Navbar = () => {
  const username = useSelector((state) => state.authManager.userdata.username);
  const isAuth = useSelector((state) => state.authManager.isAuth)
  const dispatch = useDispatch();
  const toast = useToast();
  const {onClose } = useDisclosure()

  const handleLogOut = () => {
    if (!isAuth) {
        toast({
            position: 'bottom-center',

            duration: 1200,

            render: () => (
                <Flex color='white'  p={"10px"} bgColor='red' borderRadius={"10px"}>

                    <WarningIcon w={30} h={30} /><Text size="lg" ml="15px">You Are Not Login. Please Login Again!</Text>
                </Flex >
            ),
        })

    } else {

        toast({
            position: 'bottom-center',
            duration: 1200,
            render: () => (
                <Flex color='white' borderRadius={"10px"} p={"10px"} bgColor='green.400'>

                    <CheckCircleIcon w={30} h={30} /><Text size="lg" ml="15px">You are Successfully Logged Out. Please Login Again!</Text>
                </Flex >
            ),
        })
        dispatch(userLogout())
    }



}
  return (
    <Box position={"fixed"} top = "0" left={"0"} right = "0" width = "100%" zIndex={99} >
      <Box display={["none", "none", "none", "block"]}  >
        <Box bgColor="#e42529" maxW={"full"} >
          <Flex flexDirection={"row-reverse"} p={2} pr={4}>
            <Flex
              fontWeight={"semibold"}
              color={"white"}
              gap="20px"
              fontSize={"15px"}
            >
              <Text>Find a Store</Text>
              <Text>|</Text>
              <Text>Wishlist</Text>
              <Text>|</Text>
              <Text>Contact Us</Text>
            </Flex>
          </Flex>
        </Box>

        <Box bgColor="#e42529"  >
          <Flex
            gap="60px"
            alignItems={"center"}
            justifyContent="space-between"
            pl={"30px"}
            pr={"30px"}
          >
            <RouterLink to="/">
            <Image
             mb={2}
              src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
              alt="logo"
            />
            </RouterLink>
            <InputGroup width={"38%"}>
              <Input
                placeholder="Find your favorite products"
                variant={"none"}
                borderRadius="20px"
                paddingLeft={"20px"}
              />
              <InputRightElement
                children={<Search2Icon color="green.500" />}
                paddingRight={"20px"}
              />
            </InputGroup>
            <Flex
              gap={"30px"}
              color={"white"}
              fontSize={"15px"}
              fontWeight={"semibold"}
            >
              {
                isAuth ? <Flex gap={"20px"} alignItems="center">
                <Text noOfLines={1} >Hi,  {username} </Text>
                <Text>|</Text>
              </Flex> : 
              <Flex gap={"20px"} alignItems="center">
                <Text noOfLines={1}> Select Your Pin Code </Text>
                <Text>|</Text>
              </Flex>
              }
              <Link to="/cart">
                <Flex gap={"5px"} alignItems="center">
                  <BsCartFill /> Cart
                </Flex>
              </Link>
              {
                isAuth ? 
                <Flex gap={"5px"} alignItems="center" onClick={handleLogOut} cursor = "pointer">
                <MdAccountCircle /> Logout
              </Flex>
                 : 

                <Link to="/login">
              <Flex gap={"5px"} alignItems="center">
              <MdAccountCircle /> Login
            </Flex>
              </Link>

              }
              
            </Flex>
          </Flex>
        </Box>
        <Dropdown />
      </Box>

      <Box
        bgColor="#e42529"
        pl={4}
        pr={4}
        pt={3}
        pb={3}
        display={["block", "block", "block", "none"]}
      >
        <Flex
          alignItems={"center"}
          color="white"
          justifyContent={"space-between"}
        >
          <Flex gap={"20px"} alignItems="center" justifyContent={"center"}>
            <Hamburger />
            <RouterLink to="/">
            <Image
              width={"120px"}
              height={"35px"}
              src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
              alt="logo"
              />
              </RouterLink>
          </Flex>
          <Flex justifyContent="space-between" gap={"20px"}>
            <BsFillFilePlusFill size={"20px"} />
            <Link to="/cart">
            <FaShoppingCart size={"20px"} />
            </Link>
          </Flex>
        </Flex>
        <InputGroup mt={2}>
          <InputLeftElement
            children={<Search2Icon size={"18px"} color={"gray"} />}
          />
          <Input
            placeholder="Search for Products, Brands"
            bgColor={"white"}
            borderRadius="20px"
            variant={"none"}
          />
          <InputRightElement
            children={<BsFillMicFill color="gray" size={"20px"} />}
          />
        </InputGroup>
      </Box>
    </Box>
  );
};
