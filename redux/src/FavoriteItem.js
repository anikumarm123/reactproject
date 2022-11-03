import React from 'react'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useSelector,useDispatch } from 'react-redux'
import { addTofav } from './Slice';
import {
    Card,
    CardContent,
    Typography,
    CardActions,
  } from "@mui/material";
export const FavoriteItem = () => {
    const setFavRemove = useDispatch()
    const favItems = useSelector((store)=>(store))
    const removeFun = (data) =>{
      const removefavItem = favItems.cart.favItem.filter((item)=> item.id !== data.id)
     setFavRemove(addTofav(removefavItem))
 }
  return (
    <div className='favItem' >
        {favItems.cart.favItem.map((data, index) => (
        <Card key={index} className='eachfavItem'>
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
            <RemoveShoppingCartIcon onClick={()=>removeFun(data)}/> 
          </CardActions>
        </Card>
      ))}
    </div>
  )
}
