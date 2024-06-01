import { WarningIcon } from "@chakra-ui/icons";
import { Flex, Text, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    let isAuth = useSelector((state) => state.authManager.isAuth);
  
    const toast = useToast()
    console.log(isAuth)
    if (isAuth) {
        return children
    } else {
        toast({
            position: 'top-left',
  
            render: () => (
                <Flex color='white' borderRadius={"5px"} p={"10px"} bgColor='red' alignItems={"center"}>
  
                    <WarningIcon w={30} h={30} /><Text size="lg" ml="15px">Login is Required! Please Login Firstly</Text>
                </Flex >
  
            ),
        })
        return <Navigate to="/login" />
    }
  
  }