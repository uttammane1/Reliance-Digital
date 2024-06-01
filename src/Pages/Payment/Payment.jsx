import { PhoneIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    PinInput,
    PinInputField,
    Radio,
    RadioGroup,
    Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import sty from "./payment.module.css";
import swal from 'sweetalert';

import immg from "./Dig_Xp.png"
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getCartProducts } from "../../Redux/cart/cart.action";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const [cardDetail, setCardDetail] = useState("");
    const [price,setPrice] = useState(0);
    const navigate = useNavigate();
    const cartData = useSelector((store) => store.cartManager.data);  
  const dispatch = useDispatch();

    const handlepayment = (e) => {
        setCardDetail(e);
    }

    const hanleCheckout = () => {
        swal({
            title: "Order Placed!",
            text: "Thanks for Purchasing from us. Your Order will be delievered within 4-5 Days.",
            icon: "success",
            button: "OK",
          });
          localStorage.setItem("finalPrice","0");
          navigate("/")
          handleDelete();

    }

    const handleDelete = ()=>{
        for(let i=0;i<cartData.length;i++){
            dispatch(deleteProduct(cartData[i].id))
        }
    }


    useEffect(() => {
        if (cartData.length === 0) {
            dispatch(getCartProducts())
        }
        let x  = localStorage.getItem("finalPrice");
        setPrice(x);
    },[cartData.length,dispatch])

    return (
        <div className={sty.payhead}>
            <Box
                display={{ base: "grid", lg: "flex" }}
                w="90%"
                gap="30px"
                margin="auto"  
                alignItems="baseline" 
                gridTemplateAreas={`"one" "two"`}
            >
                <Box
                    flex="7" 
                    margin="auto" 
                    gridArea={"two"} 
                    width="100%" 
                >
                    <FormControl border="1px" borderColor="#777777" borderRadius={10} padding={6}>
                        <FormLabel> Name </FormLabel>
                        <Input
                            variant="flushed"
                            type="text"
                            placeholder="Enter Name"
                            required
                        />
                        <FormLabel> Flat / House No </FormLabel>
                        <Input
                            variant="flushed"
                            type="text"
                            placeholder="Enter flat/house"
                            required
                        />
                        <FormLabel> City </FormLabel>
                        <Input
                            variant="flushed"
                            type="text"
                            placeholder="Enter City"
                            required
                        />
                        <FormLabel> State </FormLabel>
                        <Input
                            variant="flushed"
                            type="text"
                            placeholder="Enter State"
                            required
                        />
                        <FormLabel> Enter Phone no. </FormLabel>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<PhoneIcon color="gray.500" />}
                            />
                            <Input
                                type="tel"
                                variant="flushed"
                                placeholder="Enter Phone number"
                                required
                            />
                        </InputGroup>
                        <FormLabel as="legend"> Payment Method: </FormLabel>
                        {/* cash or card */}
                        <RadioGroup onChange={(e) => handlepayment(e)} value={cardDetail} >
                            <Stack direction='row'>
                                <Radio value='cash'>Cash</Radio>
                                <Radio value='card'>Card</Radio>
                            </Stack>
                        </RadioGroup>

                        {/* ==== Card Detail ===== */}
                        {cardDetail === "card" ? <Card border="1px" borderColor="blue.500" margin="18px 0">
                            <CardHeader>
                                <Heading size="md"> Card Payment </Heading>
                            </CardHeader>

                            <CardBody>
                                <Stack spacing="4">
                                    <Box>
                                        <Heading
                                            size="xs"
                                            textTransform="uppercase"
                                            textAlign={"left"}
                                            margin="4px 2px"
                                        >
                                            Card Number
                                        </Heading>
                                        <Input
                                            variant="flushed"
                                            type="number"
                                            placeholder="Enter Card Number"
                                        />
                                    </Box>
                                    <Box>
                                        <Heading
                                            size="xs"
                                            textTransform="uppercase"
                                            textAlign={"left"}
                                            margin="6px 2px"
                                        >
                                            Evpiration Date
                                        </Heading>
                                        <Input
                                            placeholder="Select Date and Time"
                                            size="md"
                                            type="datetime-local"
                                        />
                                    </Box>
                                    <Box>
                                        <Heading
                                            size="xs"
                                            textTransform="uppercase"
                                            textAlign={"left"}
                                            margin="6px 2px"
                                        >
                                            CVC code
                                        </Heading>
                                        <HStack>
                                            <PinInput type="alphanumeric">
                                                <PinInputField />
                                                <PinInputField />
                                                <PinInputField />
                                            </PinInput>
                                        </HStack>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card> : ""}
                        {/* ========= box 2 =========  */}
    
                        <Button
                            size='md'
                            height='48px'
                            type = "submit"
                            width='100%'
                            border='2px'
                            borderColor='blue.500'
                            margin="14px 0" 
                            onClick={hanleCheckout}
                            > Purchase </Button>
                        {/* ====== Button ====== */}
                    </FormControl>
                </Box>
                <Box flex="3" border="1px" borderColor="#777777" gridArea={"one"} borderRadius={10} padding="20px 10px" width="100%" >
                    <Image src={immg} alt='Logo' h="80px" margin={"auto"} />
                    <Box display={"grid"} gap="10px" >
                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} w="100%" >
                            <h3> Price </h3>
                            <h3> ₹{price} </h3>
                        </Box>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} w="100%" >
                            <h3> Quantity </h3>
                            <h3> {cartData.length} </h3>
                        </Box>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} w="100%" >
                            <h3> Total Price </h3>
                            <h3> ₹{price}</h3>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default Payment;

// Enter First Name*
// Enter Last Name*
// Enter Flat / House No / Floor / Building Name*
// Enter Colony / Street*
// Enter Landmark
// Enter City*
// Enter State*
// Enter Mobile Number*
