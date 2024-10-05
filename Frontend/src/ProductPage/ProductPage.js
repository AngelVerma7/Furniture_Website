import React, { useEffect } from 'react'
import "./ProductPage.css"
import { Link, useLocation } from 'react-router-dom';

export default function ProductPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const product = location.state || {};
  // const { item } = product; 
  console.log("ShopPage ",product)

  if (!product) {
    return <div>Product not found</div>;
  }
  

  return (
    <>
<div className="product-container">
      <div className="product-image">
      <img 
          src={product.image} 
          alt="Product" 
        />
      </div>

      {/* Right Side - Product Details */}
      <div className="product-details">
        <h2>{product.name || "Product Name"}</h2>
        <p>{product.name || "Product Name"} at base price and in good quality</p>
        <h3>₹{product.price || "Price"}</h3>
        
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
