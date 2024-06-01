
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Input, Text, useDisclosure, useToast } from "@chakra-ui/react"
import React from "react"
import { BsCameraFill, BsFillTelephoneFill } from "react-icons/bs"
import { FaBath, FaHeadphones, FaInfoCircle, FaMobileAlt, FaShoppingCart, FaSitemap, FaUsb } from "react-icons/fa"
import { GiHamburgerMenu, GiPlug } from "react-icons/gi"
import {GoPlus} from "react-icons/go"
import { MdAccountCircle, MdComputer, MdLocationOn, MdOutlineSms } from "react-icons/md"
import {RiComputerLine} from "react-icons/ri"
import {ImSpoonKnife} from "react-icons/im"
import { BiQrScan } from "react-icons/bi"
import { userLogout } from "../../Redux/auth/auth.action"
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Hamburger = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const username = useSelector((state) => state.authManager.userdata.username);
    const isAuth = useSelector((state) => state.authManager.isAuth)
    const dispatch = useDispatch();
    const toast = useToast();
  
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
      <>
        <GiHamburgerMenu ref={btnRef} colorScheme='teal' onClick={onOpen}/>
         
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerCloseButton  color={"white"}/>
            {
              isAuth ? <DrawerHeader fontSize={"16px"} color="white" fontWeight={"semibold"} bgColor={"#e42529"}>Hi, {username}</DrawerHeader> : 
              <DrawerHeader fontSize={"16px"} color="white" fontWeight={"semibold"} bgColor={"#e42529"}>Login / Register</DrawerHeader>
            }
  
            <DrawerBody p={0} fontSize = {"15px"}>
              <Box bgColor = "gray.100" p={2}>Categories</Box>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <FaMobileAlt/>
                   <Link to = "/mobile"> <Text onClick={onClose}>Mobiles & Tablets</Text></Link>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <RiComputerLine/>
                    <Link to="/televisions"><Text onClick={onClose}>Television</Text></Link>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <FaHeadphones/>
                    <Link to="/headphone"><Text onClick={onClose}>Audio</Text></Link>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <GiPlug/>
                    <Link to="/home"><Text onClick={onClose}>Home Appliances</Text></Link>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <MdComputer/>
                    <Link to="computer"><Text onClick={onClose}>Computer</Text></Link>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <BsCameraFill/>
                    <Link to="/camera"><Text onClick={onClose}>Cameras</Text></Link>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <ImSpoonKnife/>
                    <Link to="/kitchen"><Text onClick={onClose}>Kitchen Appliances</Text></Link>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <FaBath/>
                    <Link to="/personal"><Text onClick={onClose}>Personal Care</Text></Link>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <FaUsb/>
                    <Text onClick={onClose}>Accessories</Text>
                </Flex>
                <GoPlus/>
              </Flex>
              <Box bgColor = "gray.100" p={2}>Help Section</Box>

              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <FaShoppingCart/>
                    <Text onClick={onClose}>Cart</Text>
                </Flex>
                
              </Flex>

              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <MdLocationOn/>
                    <Text onClick={onClose}>Find a Store</Text>
                </Flex>
             
              </Flex>

              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <BsFillTelephoneFill/>
                    <Text onClick={onClose}>Contact Us</Text>
                </Flex>
                
              </Flex>

              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <BiQrScan/>
                    <Text onClick={onClose}>Scanner</Text>
                </Flex>
                
              </Flex>

              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <FaInfoCircle/>
                    <Text onClick={onClose}>Buying Guide</Text>
                </Flex>
              
              </Flex>

              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <FaSitemap/>
                    <Text onClick={onClose}>Site Info</Text>
                </Flex>
                <GoPlus/>
              </Flex>

              {
                isAuth ? <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px" onClick={handleLogOut}>
                    <MdAccountCircle/>
                    <Text onClick={onClose}>Log Out</Text>
                </Flex>
          
              </Flex> : 
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <MdAccountCircle/>
                    <Text onClick={onClose}>Login</Text>
                </Flex>
              
              </Flex>
              }
              
            </DrawerBody>
  
           
          </DrawerContent>
        </Drawer>
      </>
    )
  }