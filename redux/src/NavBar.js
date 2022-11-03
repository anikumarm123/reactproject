import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import {Link} from "react-router-dom"
import navLogo from './images/amazon-logo.png'
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
function NavBar() {
  const favNav = useNavigate();
  const addNav = useNavigate();
  const homeNav = useNavigate();
  const mobile = useNavigate();
  const camera = useNavigate();
  const tv = useNavigate();
  const laptop = useNavigate();
  const getLength = useSelector((data)=>data)
  const [searchItem,setSeacrchItem] = useState([]);
const homeFun = () =>{
   homeNav("/navbar")
}
  const addToCart = () => {
    favNav("/addcart");
  };
  const addFavorite = () => {
    addNav("/addfav");
  };
  const searchFun = (event)=>{
      setSeacrchItem(event.target.value)
  }
  const searchBtn =()=>{
    if(searchItem === 'mobile'){
      mobile('/mobile')
    }
    if(searchItem === 'laptop'){
      laptop('/laptop')
    }
    if(searchItem === 'camera'){
      camera('/camara')
    }
    if(searchItem === 'tv'){
      tv('/tv')
    }
  }
  return (
    <div>
     <div className="navFlx">
      <div className="logo">
      <img src={navLogo}/>
      </div>
      <div className='place'>
      <PlaceIcon/> <span style={{fontSize:'1.3vw'}}>All India</span><span style={{color:'#f8c239',fontSize:'1.5vw',paddingLeft:'7px'}}>Delivery</span>
      </div>
      <div className="searchBar">
        <div className="searchip"><input placeholder="Search"  onChange={searchFun}/></div>
        <div onClick={searchBtn} className="search"><SearchIcon/></div>
      </div> 
      <div className="navRight">
        <div className="icons"><HomeIcon onClick={homeFun}/><br></br><span>Home</span></div>
        <div className="icons"><Badge color="warning" badgeContent={ getLength.cart.cartItem.length}> <AddShoppingCartIcon onClick={addToCart}/></Badge><br></br><span>Cart</span></div>
        <div className="icons"><Badge color="warning" badgeContent={getLength.cart.favItem.length}> <FavoriteIcon onClick={addFavorite}/></Badge><br></br><span>Favorite</span></div>
      </div>  
     </div>
     <div className='subnav'>
        <a><Link to='/mobile'>Mobile</Link></a> 
       <a><Link to='/laptop'>Laptop</Link></a> 
       <a><Link to='/tv'>Tv</Link></a> 
        <a><Link to='/camara'>Camara</Link></a>
     </div>
     </div>
  );
}

export default NavBar;
