import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../Redux/auth/auth.action";

let intdata = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [data, setData] = useState(intdata);
  const existingData = useSelector((state) => state.authManager.userdata);
  const dispatch = useDispatch();
  const toast = useToast();
  const isAuth = useSelector((state) => state.authManager.isAuth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.email !== existingData.email ||
      data.password !== existingData.password
    ) {
      toast({
        position: "bottom-center",

        render: () => (
          <Flex color="white" borderRadius={"15px"} p={"10px"} bgColor="red" alignItems={"center"}>
            <WarningIcon w={30} h={30} />
            <Text size="lg" ml="15px">
              Ohh ! Sorry, You entered Wrong Email or Password. Please Enter Correct Details. Try Again Login!
            </Text>
          </Flex>
        ),
      });
    } else {
      toast({
        position: "bottom-center",
        render: () => (
          <Flex
            color="white"
            borderRadius={"15px"}
            p={"10px"}
            bgColor="green.400"
            alignItems={"center"}
          >
            <CheckCircleIcon w={30} h={30} />
            <Text size="lg" ml="15px">
              You are Successfully Login. We redirected you to HomePage.
            </Text>
          </Flex>
        ),
      });
      dispatch(userLogin());
      navigate("/");
    }

    setData(intdata);
  };
  const handleChange = (e) => {
    const { type, value } = e.target;
    setData({ ...data, [type]: value });
  };
  

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
          <Input placeholder="Enter Email Address" type="email" borderRadius={"none"} value={data.email} onChange={handleChange}/>

          <FormLabel mt={8}>Password</FormLabel>
          <Input placeholder="Enter Password Here" borderRadius="none" type="password" value={data.password} onChange={handleChange}/>

          <Flex mt={4} pl={2} pr={2}>
            <Link to="/admin/login">
              <Text color={"blue"} fontWeight={"semibold"} fontSize={"14px"}>
                Login As Admin
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
            value="LOGIN AS USER"
            fontWeight={"semibold"}
            borderRadius={"none"}
            mt={4}
            mb={6}
            backgroundColor="rgb(228, 37, 41)"
            color={"white"}
          />
        </FormControl>
      </form>
    </div>
  );
};

export default LoginForm;
