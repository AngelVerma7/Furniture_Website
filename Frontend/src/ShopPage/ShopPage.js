import React, { useState } from "react";
import "./ShopPage.css";
import BestSellerCard from '../Best Seller/BestSellerCard'

export default function ShopPage() {
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [priceRange, setPriceRange] = useState([100, 3000]);

  const products = [
    { name: "Marble Coffee Table", price: 1400, category: "table", color: "white", material: "marble", image: 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/Group-64-Copy-79.jpg' },
    { name: "Loren Dinning Chair", price: 550, category: "chair", color: "brown", material: "fabric", image: 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/Group-64-Copy-89.jpg' },
    { name: "Miruna Floor Lamp", price: 1250, category: "lamp", color: "clear", material: "metal", image: 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/Group-64-Copy-4.jpg' },
    { name: "Marble Coffee Table", price: 1400, category: "table", color: "white", material: "marble", image: 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/Group-64-Copy-79.jpg' },
    { name: "Marble Coffee Table", price: 1400, category: "table", color: "white", material: "marble", image: 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/Group-64-Copy-79.jpg' },
    // Add more products
  ];

  // Filter the products based on selected filters
  const filteredProducts = products.filter((product) => {
    return (
      (category === "" || product.category === category) &&
      (color === "" || product.color === color) &&
      (material === "" || product.material === material) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
  });
  return (
    <>
    <div className="shop-container">
      <div className="filter-section">
        <h3>Filters</h3>
        <div className="filter">
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="table">Table</option>
            <option value="chair">Chair</option>
            <option value="lamp">Lamp</option>
          </select>
        </div>

        <div className="filter">
          <label htmlFor="color">Color:</label>
          <select id="color" value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="">All</option>
            <option value="brown">Brown</option>
            <option value="white">white</option>
            <option value="clear">Clear</option>
          </select>
        </div>

        <div className="filter">
          <label htmlFor="material">Material:</label>
          <select id="material" value={material} onChange={(e) => setMaterial(e.target.value)}>
            <option value="">All</option>
            <option value="marble">Marble</option>
            <option value="fabric">Fabric</option>
            <option value="metal">Metal</option>
          </select>
        </div>

        <div className="filter">
          <label htmlFor="priceRange">Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
          <input
            type="range"
            id="priceRange"
            min="0"
            max="3000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          />
        </div>
      </div>

      {/* Right Section for Products */}
      <div className="product-section">
        <div className="Product-grid">
          {filteredProducts.map((product, index) => (
            <BestSellerCard key={index} itemimg= {product.image} itemname={product.name} itemInfo="Solid in Construction,Simple in form" itemprice={product.price}/> 
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
