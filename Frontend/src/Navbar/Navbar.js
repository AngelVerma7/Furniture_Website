// import React from "react";
import "../index.css";
import '../Navbar/topheader.css';
import {Link, useLocation } from "react-router-dom";
import React,{useState} from 'react'
import user from "../img/User.webp"
import Logo from "../img/Ecomm-Logo.webp"
import cart from "../img/cart.webp"

export default function Navbar(){
  const [query, setQuery] = useState("");
  const location = useLocation();
  const product = location.state || {};
  // console.log("some",product)
    return (<>
    <div className="n-wrapper" id="Navbar">
       {/* left */}
       <div className="n-left">
         <Link to="/Home"><div className="n-name"><button><img src={Logo} alt="" /></button></div></Link>
         <div className="n-list">
           <ul style={{ listStyleType: "none" }}>
           <li className="dropdown">
           <Link to="/ShopPage?category=Sofa">Living Room</Link>
             <div className="dropdown-content">
             <Link to="/ShopPage?category=Sofa">Sofas</Link>
             <Link to="/ShopPage?category=Temple">Temple</Link>
             <Link to="/ShopPage?category=TVstand">TV Stand</Link>
               </div></li>
             <li className="dropdown">
             <Link to="/ShopPage?category=DinningTable">Dinning Room</Link>
             <div className="dropdown-content">
             <Link to="/ShopPage?category=DinningTable">Dinning Table</Link>
             <Link to="/ShopPage?category=TVstand">TV Stand</Link>
               </div></li>
               <li className="dropdown">
               <Link to="/ShopPage?category=Bed">Bedroom</Link>
             <div className="dropdown-content">
             <Link to="/ShopPage?category=Sofa">Sofas</Link>
             <Link to="/ShopPage?category=Bed">Bed</Link>
             <Link to="/ShopPage?category=wardrobe">Wardrobe</Link>
               </div></li>
           </ul>
         </div>
       </div>
       

       <div className="n-right">
       <div className="search-box">
          <form action="/#" method="get">
              <input onChange={e => setQuery(e.target.value)} type="text" placeholder="Search for products..."/>
          </form>
        </div>
        
         <div className="nav-button"> 
          <Link to='/CartPage'>
         <button className=" n-button3"><img src={cart} alt="" /></button>
         </Link>
         <Link to="/login">
         <button className=" n-button4"><img src={user} alt="" /></button>
         </Link>
         </div>
         
        </div>
     </div>
     </>
        
    )
}
