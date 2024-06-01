import { WarningIcon } from "@chakra-ui/icons";
import { Flex, Text, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    let isAuth = useSelector((state) => state.authManager.isAuth);

    const toast = useToast()
    console.log(isAuth)
    if (isAuth) {
        return children
    } else {
        toast({
            position: 'bottom-center',

            render: () => (
                <Flex color='white' p={"10px"} bgColor='red' borderRadius = {"10px"}>

                    <WarningIcon w={30} h={30} /><Text size="lg" ml="15px">You are not Login. Please Login & Try Again! </Text>
                </Flex >

            ),
        })
        return <Navigate to="/login" />
    }

}

export default PrivateRoute;