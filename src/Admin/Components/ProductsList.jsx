import { DeleteIcon, } from "@chakra-ui/icons";
import {
  Box,
  Circle,
  Flex,
  Text,

  Image,
 
} from "@chakra-ui/react";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdminProducts, getAdminProducts } from "../../Redux/admin/admin.action";
import ProductItem from "./ProductItem";


const ProductsList = () => {
  const data = useSelector((store) => store.adminProductsManager.data);
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    if(data.length === 0){
      dispatch(getAdminProducts())
    }
},[data.length,dispatch])



  return (
    <Box mt={8}>
      
      {
        data.map((el) => {
            return (
                <ProductItem key={el.id} {...el}/>
            )
        })
      }
      </Box>
    
  );
};

export default ProductsList;
