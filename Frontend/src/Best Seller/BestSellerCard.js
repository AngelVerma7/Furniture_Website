import React from 'react'
import "../Best Seller/BestSeller.css";

export default function BestSellerCard(props) {
  return (
    <>
    <div className='BestSellercards'onClick={props.OnCardClick} >
            <div className="BestSellerimg">
                <img src={props.itemimg} alt="...?"/>
            </div>
        <div className='itemDetails' >
            <div className='ItemInfo'>
                <div className="BestSelleritemname">{props.itemname}</div>
                <div className="BestSellerprice">₹{props.itemprice}</div>
            </div>
        </div>
    </div>
    </>
  )
}
