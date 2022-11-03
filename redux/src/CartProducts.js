import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from './Slice';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
const CartProducts = () => {
    const setRemove = useDispatch()
    const cartItems = useSelector((store)=>(store))
  const removeFun = (data) =>{
       const removeCartItem = cartItems.cart.cartItem.filter((item)=> item.id !== data.id)
      setRemove(addToCart(removeCartItem))
  }
  return (
    <div className='cartItem'>
      
      {cartItems.cart.cartItem.map((data, index) => (
        <Card key={index} className="carteachItem">
          <img src={data.image} />
          <CardContent>
            <Typography
              variant="body2"
              style={{ color: "black", fontSize: "1.2vw", fontWeight: "600" }}
            >
              {data.productDiscription}
            </Typography>
          </CardContent>
          <CardActions className='removeIcon'>
            <span style={{ fontSize: "1.6vw", fontWeight: "600" }}>
              Price :{data.sellingPrice}
            </span>
            <s
              style={{ fontSize: "1.4vw", color: "gray", padding: "0px 10px" }}
            >
              {data.offerPrice}
            </s>
           <RemoveShoppingCartIcon  onClick={()=>removeFun(data)}/> 
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default CartProducts