import React, { useEffect } from 'react'
import "./ProductPage.css"
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../CartPage/CartContext';

export default function ProductPage({props}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const location = useLocation();
  const product = location.state || {};
  const imageName = product.product.image;
  const itemName = product.product.name;
  const itemPrice = product.product.price;
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleAddToCart = () => {
    addToCart(product.product);
};
  
  

  return (
    <>
<div className="product-container">
      <div className="product-image">
      <img 
          src={imageName} 
          alt="Product" 
        />
      </div>

      {/* Right Side - Product Details */}
      <div className="product-details">
        <h2>{itemName || "Product Name"}</h2>
        <p>{itemName || "Product Name"} at base price and in good quality</p>
        <h3>₹{itemPrice || "Price"}</h3>
        <div className="add-to-cart">
          {/* <div className="quantity-control">
            <input type="number" min="1" />
          </div> */}
          <Link to='/CartPage'>
          <button onClick={handleAddToCart}>Add to Cart</button>
          </Link>
        </div>
        <p class="delivery-time">Ready for delivery in 4-5 weeks</p>
      </div>
    </div>
    </>
  )
}
