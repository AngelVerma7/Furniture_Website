import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../Best Seller/BestSeller.css"
import BestSellerCard from './BestSellerCard'
import Cupboard from "../img/cupboard3.jpg"
import TVStand from "../img/TVstand3.jpg"
import Kitchen from "../img/kitchen2.jpg"
import Door from "../img/door.jpg"

export default function BestSeller() {
  const bestSellers = [
    {
      id: 1,
      image: Cupboard,
      name: 'Wooden Wardrobe',
      itemInfo: 'Solid in Construction, Simple in form',
      price: '8000',
    },
    {
      id: 2,
      image: TVStand,
      name: 'Wooden TV Stand',
      itemInfo: 'Solid in Construction, Simple in form',
      price: '7500',
    },
    {
      id: 3,
      image: Kitchen,
      name: 'Kitchen Interior',
      itemInfo: 'Solid in Construction, Simple in form',
      price: '15000',
    },
    {
      id: 4,
      image: Door,
      name: 'Wooden Door Design',
      itemInfo: 'Solid in Construction, Simple in form',
      price: '8000',
    },
  ];
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
                  image={item.image}
                  name={item.name}
                  itemInfo={item.itemInfo}
                  price={item.price}
                  OnCardClick={() => handleNavigate(item)}
                />
      ))}
            </div>
    </div>
    </>
  )
}
