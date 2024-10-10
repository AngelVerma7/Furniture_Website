import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../Best Seller/BestSeller.css"
import BestSellerCard from './BestSellerCard'
import Cupboard from "../img/cupboard/cupboard3.webp"
import TVStand from "../img/tvstand/TVstand3.webp"
import Kitchen from "../img/kitchen/kitchen2.webp"
import Door from "../img/door/door1.webp"

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
    const handleNavigate = (product) => {
        navigate(`/ProductPage/${product.id}`, { state: { product } });
    };
  return (
    <>
    <div className="BestSeller">
            <div className="heading">
                <div className="i2-name">Best Seller</div>
            </div>
            <div className="BestSellercontents">
            {bestSellers.map((product) => (
                <BestSellerCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  itemInfo={product.itemInfo}
                  price={product.price}
                  OnCardClick={() => handleNavigate(product)}
                />
      ))}
            </div>
    </div>
    </>
  )
}
