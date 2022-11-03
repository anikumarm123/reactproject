import { useSelector, useDispatch } from "react-redux";
import { addToCart, addTofav } from "./Slice";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export const Camara = () => {
  const products = useSelector((store) => store);
  const dispatch = useDispatch();

  const addFun = (data)=>{
      const check = products.cart.cartItem.some((item)=>item.id === data.id)
      if(check === false){
      dispatch(addToCart([...products.cart.cartItem,data]))
      }
  }
  
  const favFun = (data) =>{
    const check = products.cart.favItem.some((item)=>item.id === data.id)
    if(check === false){
    dispatch(addTofav([...products.cart.favItem,data]))
    }
  }

  return (
    <div className="listItem">
      {products.cart.product.map((data, index) => {
        if(data.name === 'camera'){
        return (<Card key={index} className="eachItem">
          <img src={data.image} />
          <CardContent>
            <Typography
              variant="body2"
              style={{ color: "black", fontSize: "1.2vw", fontWeight: "600" }}
            >
              {data.productDiscription}
            </Typography>
          </CardContent>
          <CardActions className="homeIcon">
            <span style={{ fontSize: "1.6vw", fontWeight: "600" }}>
              Price :{data.sellingPrice}
            </span>
            <s
              style={{ fontSize: "1.4vw", color: "gray", padding: "0px 10px" }}
            >
              {data.offerPrice}
            </s>
            <AddShoppingCartIcon onClick={()=>addFun(data)}  className="addCart" style={{ paddingLeft: "2vw" ,fontSize:'28px' }} />

            <FavoriteIcon onClick={()=>favFun(data)} style={{ paddingLeft: "2vw",fontSize:'28px' }} />
          </CardActions>
        </Card>)}
      })}

    </div>
  );
};
