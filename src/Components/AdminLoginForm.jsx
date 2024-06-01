import {

  FormControl,
  FormLabel,
  Text,
  Input,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,  useNavigate } from "react-router-dom";
import { loginAdmin } from "../Redux/adminAuth/adminAuth.action";

const AdminLoginForm = () => {

  const [loginCreds, setLoginCreds] = useState({});
  const {isAuth} = useSelector(store => store.adminAuthManager);
  const dispatch = useDispatch()

  const navigate = useNavigate();


  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginAdmin(dispatch, loginCreds);
  };

  useEffect(() => {
    if(isAuth){
        navigate("/admin");
    }
  },[isAuth,navigate])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl
          isRequired
          mt={2}
          borderRadius="15px"
          paddingLeft={4}
          paddingRight={4}
          pt={6}
        >
          <FormLabel>Email Address</FormLabel>
          <Input
            name="email"
            placeholder="Enter Admin Email Address"
            borderRadius={"none"}
            onChange={hanldeChange}
          />

          <FormLabel mt={8}>Password</FormLabel>
          <Input placeholder="Enter Password Here" borderRadius="none" name="password" type="password" onChange={hanldeChange}/>

          <Flex mt={4} pl={2} pr={2}>
            <Link to="/login">
              <Text color={"blue"} fontWeight={"semibold"} fontSize={"14px"}>
                Login As User
              </Text>
            </Link>
            <Spacer />
            <Link to="/register">
              <Text color={"blue"} fontWeight={"semibold"} fontSize={"14px"}>
                Register As User
              </Text>
            </Link>
          </Flex>

          <Input
            type="Submit"
            value="LOGIN AS ADMIN"
            fontWeight={"semibold"}
            borderRadius={"none"}
            mt={4}
            backgroundColor="rgb(228, 37, 41)"
            color={"white"}
            mb={6}
          />
        </FormControl>
      </form>
    </div>
  );
};

export default AdminLoginForm;
