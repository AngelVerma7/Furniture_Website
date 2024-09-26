// import React from "react";
import "../index.css";
import '../Navbar/topheader.css';
import {Link } from "react-router-dom";
import React, { Component } from 'react'
import user from "../img/User.png"
import Logo from "../img/Ecomm-Logo.jpg"
import cart from "../img/cart.png"

export default class Navbar extends Component {
  render() {
    return (<>

    <div className="n-wrapper" id="Navbar">
       {/* left */}
       <div className="n-left">
         <Link to="/Home"><div className="n-name"><button><img src={Logo} alt="" /></button></div></Link>
         <div className="n-list">
           <ul style={{ listStyleType: "none" }}>
           <li className="dropdown">
           <Link to="/ShopPage">Living Room</Link>
             <div className="dropdown-content">
             <Link to="/ShopPage">Sofas</Link>
             <Link to="/ShopPage">Chairs</Link>
             <Link to="/ShopPage">Tables</Link>
               </div></li>
             <li className="dropdown">
             <Link to="/ShopPage">Dinning Room</Link>
             <div className="dropdown-content">
             <Link to="/ShopPage">Chairs</Link>
             <Link to="/ShopPage">Temple</Link>
             <Link to="/ShopPage">TV Stand</Link>
               </div></li>
               <li className="dropdown">
               <Link to="/ShopPage">Bedroom</Link>
             <div className="dropdown-content">
             <Link to="/ShopPage">Sofas</Link>
             <Link to="/ShopPage">Chairs</Link>
             <Link to="/ShopPage">Desk</Link>
             <Link to="/ShopPage">Bedside table</Link>
             <Link to="/ShopPage">Upholstered Beds</Link>
             <Link to="/ShopPage">Dressers</Link>
               </div></li>
             <li className="dropdown">
             <Link to="/ShopPage">Decor</Link>
                <div className="dropdown-content">
                <Link to="/ShopPage">Wall Print</Link>
                <Link to="/ShopPage">Clock</Link>
                <Link to="/ShopPage">Table Lamp</Link>
                <Link to="/ShopPage">Rug</Link>
                <Link to="/ShopPage">Vase</Link>
                <Link to="/ShopPage">Mirror</Link>
               </div>
            </li>
           </ul>
         </div>
       </div>
       

       <div className="n-right">
       <div className="search-box">
          <form action="/#" method="get">
              <input type="text" placeholder="Search for products..."/>
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
}
