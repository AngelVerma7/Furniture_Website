import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../Best Seller/BestSeller.css"
import BestSellerCard from './BestSellerCard'
import Cupboard from "../img/cupboard3.jpg"
import TVStand from "../img/TVstand3.jpg"
import Kitchen from "../img/kitchen2.jpg"
import Door from "../img/door.jpg"

export default function BestSeller() {
  const [bestSellers, setBestSellers] = useState([
    {
      id: 1,
      itemimg: Cupboard,
      itemname: 'Wooden Wardrobe',
      itemInfo: 'Solid in Construction, Simple in form',
      itemprice: '8000',
    },
    {
      id: 2,
      itemimg: TVStand,
      itemname: 'Wooden TV Stand',
      itemInfo: 'Solid in Construction, Simple in form',
      itemprice: '7500',
    },
    {
      id: 3,
      itemimg: Kitchen,
      itemname: 'Kitchen Interior',
      itemInfo: 'Solid in Construction, Simple in form',
      itemprice: '15000',
    },
    {
      id: 4,
      itemimg: Door,
      itemname: 'Wooden Door Design',
      itemInfo: 'Solid in Construction, Simple in form',
      itemprice: '8000',
    },
  ]);
  const navigate = useNavigate();
    const handleNavigate = (item) => {
        navigate(`/ProductPage/${item.id}`, { state: { item } });
    };
  return (
    <>
    <div className="BestSeller">
            <div className="heading">
                <div className="i2-name">Best Seller</div>
            </div>
            <div className="BestSellercontents">
            {bestSellers.map((item) => (
                <BestSellerCard
                  key={item.id}
                  itemimg={item.itemimg}
                  itemname={item.itemname}
                  itemInfo={item.itemInfo}
                  itemprice={item.itemprice}
                  OnCardClick={() => handleNavigate(item)}
                />
      ))}
            </div>
    </div>
    </>
  )
}
