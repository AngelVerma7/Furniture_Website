import React from 'react'
import "../Best Seller/BestSeller.css";

export default function BestSellerCard(props) {
  return (
    <>
    <div className='BestSellercards'onClick={props.OnCardClick} >
            <div className="BestSellerimg">
                <img src={props.image} alt="...?"/>
            </div>
        <div className='itemDetails' >
            <div className='ItemInfo'>
                <div className="BestSelleritemname">{props.name}</div>
                <div className="BestSellerprice">₹{props.price}</div>
            </div>
        </div>
    </div>
    </>
  )
}
