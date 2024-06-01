import { WarningIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout'
import { useToast } from '@chakra-ui/toast'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteProduct, getCartProducts } from '../../Redux/cart/cart.action'
import crt from "./cart.module.css"
const CartItem = ({img,id,name,price,mrp,delevery}) => {
    const dispatch = useDispatch();
    const toast = useToast();
    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
        dispatch(getCartProducts());
        toast({
          position: 'bottom-center',

          duration: 1200,

          render: () => (
              <Flex color='white'  p={"10px"} bgColor='red' borderRadius={"10px"}>

                  <WarningIcon w={30} h={30} /><Text size="lg" ml="15px">Your {name} is Removed from Cart</Text>
              </Flex >
          ),
      })
      }
  return (
    <div>
    <div key={id} className={crt.proinfobox}>
    <div className={crt.productbox} >
      <div>
        <img src={img} alt="Product images" className={crt.cartimg} />
      </div>
      <div>
        <h3>{name}</h3>
        <h5> <FaPlus size="12" className={crt.plslogo} /> <span> RECOMMENDED SERVICES/WARRANTY </span> </h5>
      </div>
      <div id={crt.mxm}>
        <h2> ₹{price} </h2>
        <h2 id={crt.strikethrough}> M.R.P: <i style={{ textDecoration: "line-through" }}> {mrp} </i> <span> Inclusive of all taxes </span> </h2>
        <h2 id={crt.ships}> Free Shipping </h2>
        <h2 id={crt.delevery}> <img src="https://www.reliancedigital.in/build/client/images/standard_delivery_icon.png" width="24px" alt="truck" /> Delivere by: {delevery} </h2>
        <h2 id={crt.gov}> *Delivery assurance is subject to our delivery locations staying open as per govt. regulations </h2>
      </div>
    </div> 
    <div className={crt.cartbutton}>
      <button onClick={() => { handleDelete(id) }}>Remove</button>

      {/* <button onClick={() => {
        let obj = {}
        for (let i of data)
          if (i.id === id) {
            obj = i
          }
        dispatch(addtoWish(obj));
      }}>Add to Wish</button>  */}

      <button> Move to wishlist </button>
    </div>
  </div>
    </div>
  )
}

export default CartItem