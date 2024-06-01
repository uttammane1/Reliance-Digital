import { Box, Flex, Image, Text } from "@chakra-ui/react";

import AdminLoginForm from "../Components/AdminLoginForm";


const AdminLogin = () => {
 

  return (
    <Box width={["95%", "90%","90%", "90%"]} m="auto" mt={48}  mb = {12}>
      <Flex m="auto" gap={["30px","50px","60px","100px"]} flexDirection={["column-reverse","column-reverse","column-reverse","row"]} alignItems="center">
        <Box>
          <Image
           borderRadius={"15px"}
            width={"800px"}
            src="https://www.reliancedigital.in/akamai/images/mobile/Login-banner.jpeg"
            alt="img"
          />
        </Box>

        <Box
          borderRadius={"15px"}
          width={["90%","90%","90%","40%"]}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        >
          <Text p={4} borderBottom="1px solid #cecece" fontWeight={"semibold"}>
            Login As Admin
          </Text>

          <AdminLoginForm />
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminLogin;
