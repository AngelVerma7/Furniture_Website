// import React from "react";
import "../index.css";
import '../Navbar/topheader.css';
import {Link } from "react-router-dom";
import React, { Component } from 'react'
import user from "../img/User.png"
import cart from "../img/cart.png"

export default class Navbar extends Component {
  render() {
    return (<>

    <div className="n-wrapper" id="Navbar">
       {/* left */}
       <div className="n-left">
         <Link to="/Home"><div className="n-name"><button>XYZ</button></div></Link>
         <div className="n-list">
           <ul style={{ listStyleType: "none" }}>
           <li className="dropdown">
              <a href="/#">Living Room</a>
             <div className="dropdown-content">
                 <a href="/#">Sofas</a>
                 <a href="/#">Chairs</a>
                 <a href="/#">Tables</a>
                 <a href="/#">Storage</a>
               </div></li>
             <li className="dropdown">
              <a href="/#">Dinning Room</a>
             <div className="dropdown-content">
                 <a href="/#">Stools</a>
                 <a href="/#">Chairs</a>
                 <a href="/#">Dinning Table</a>
                 <a href="/#">Benches</a>
               </div></li>
               <li className="dropdown">
              <a href="/#">Bedroom</a>
             <div className="dropdown-content">
                 <a href="/#">Sofas</a>
                 <a href="/#">Chairs</a>
                 <a href="/#">Desk</a>
                 <a href="/#">Bedside table</a>
                 <a href="/#">Upholstered Beds</a>
                 <a href="/#">Dressers</a>
               </div></li>
             <li className="dropdown">
                <a href="/#">Decor</a>
                <div className="dropdown-content">
                 <a href="/#">Wall Print</a>
                 <a href="/#">Clock</a>
                 <a href="/#">Table Lamp</a>
                 <a href="/#">Rug</a>
                 <a href="/#">Vase</a>
                 <a href="/#">Mirror</a>
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
