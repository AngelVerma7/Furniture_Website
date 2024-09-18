import React from 'react'
import "../Best Seller/BestSeller.css"
import BestSellerCard from './BestSellerCard'

export default function BestSeller() {
  return (
    <>
    <div className="BestSeller">
            <div className="heading">
                <div className="i2-name">Best Seller</div>
            </div>
            <div className="BestSellercontents">
            <BestSellerCard itemimg= 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/Group-64-Copy-79.jpg' itemname="Marble Coffee Table" itemInfo="Solid in Construction,Simple in form" itemprice="1200"/> 
            <BestSellerCard itemimg= 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/Group-64-Copy-89.jpg' itemname="Loren Dinning Chair" itemInfo="Solid in Construction,Simple in form" itemprice="550"/> 
            <BestSellerCard itemimg= 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/Group-64-Copy-69.jpg' itemname="Sana Dinning Table" itemInfo="Solid in Construction,Simple in form" itemprice="1800"/> 
            <BestSellerCard itemimg= 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/Group-64-Copy-56.jpg' itemname="Sari Upholstered Bed with Storage" itemInfo="Solid in Construction,Simple in form" itemprice="1200"/> 
            </div>
    </div>
    </>
  )
}
