import React from 'react'
import "../Best Seller/BestSeller.css"
import BestSellerCard from './BestSellerCard'
import Cupboard from "../img/cupboard3.jpg"
import TVStand from "../img/TVstand3.jpg"
import Kitchen from "../img/kitchen2.jpg"
import Door from "../img/door.jpg"

export default function BestSeller() {
  return (
    <>
    <div className="BestSeller">
            <div className="heading">
                <div className="i2-name">Best Seller</div>
            </div>
            <div className="BestSellercontents">
            <BestSellerCard itemimg= {Cupboard} itemname="Wooden Wardrobe" itemInfo="Solid in Construction,Simple in form" itemprice="8000"/> 
            <BestSellerCard itemimg= {TVStand} itemname="Wooden TV Stand" itemInfo="Solid in Construction,Simple in form" itemprice="7500"/> 
            <BestSellerCard itemimg= {Kitchen} itemname="Kitchen Interior" itemInfo="Solid in Construction,Simple in form" itemprice="15000"/> 
            <BestSellerCard itemimg= {Door} itemname="Wooden Door Design" itemInfo="Solid in Construction,Simple in form" itemprice="8000"/> 
            </div>
    </div>
    </>
  )
}
