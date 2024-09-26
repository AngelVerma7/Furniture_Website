import React, { useState, useEffect } from 'react'
import "./ProductPage.css"
import { Link } from 'react-router-dom';

export default function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [mainImage, setMainImage] = useState('https://ergocraft.vamtam.com/wp-content/uploads/2024/04/Group-64-Copy-79.jpg');
  const images = [
    'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/Group-64-Copy-79.jpg', 
    'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/Rectangle-Copy-10-9.41.21.jpg',
    'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/Group-64-Copy-81-9.41.21.jpg',
    'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/Group-64-Copy-80.jpg',
  ];
  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (
    <>
<div className="product-container">
      <div className="product-image">
      <img 
          src={mainImage} 
          alt="Product" 
        />
        <div className="image-gallery">
        {images.map((imageUrl, index) => (
            <img 
              key={index} 
              src={imageUrl} 
              alt={`Thumbnail ${index + 1}`} 
              onClick={() => handleImageClick(imageUrl)}
              className={imageUrl === mainImage ? 'active' : ''} 
            />
          ))}
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="product-details">
        <h2>Kitchen Interior</h2>
        <p>Wooden Wardrobe with 120 (200) x 120 cm</p>
        <h3>₹15000</h3>
        
        <div className="add-to-cart">
          <div className="quantity-control">
            <input type="number" min="1" />
          </div>
          <Link to='/CartPage'>
          <button>Add to Cart</button>
          </Link>
        </div>
        <p class="delivery-time">Ready for delivery in 4-5 weeks</p>
      </div>
    </div>
    </>
  )
}
