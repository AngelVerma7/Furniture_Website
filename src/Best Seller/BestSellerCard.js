import React from 'react'
import {Link } from "react-router-dom";
import "../Best Seller/BestSeller.css";

export default function BestSellerCard(props) {
  return (
    <>
    <div className='BestSellercards'>
        <Link to="/ProductPage">
            <div className="BestSellerimg">
                <img src={props.itemimg} alt="...?"/>
            </div>
        </Link>  
        <div className='itemDetails'>
            <div className='ItemInfo'>
                <div className="BestSelleritemname">{props.itemname}</div>
                <div className="BestSelleritemInfo">{props.itemInfo}</div>
            </div>
            <div>
                <div className="BestSellerprice">₹{props.itemprice}</div>
            </div>
        </div>
    </div>
    </>
  )
}
