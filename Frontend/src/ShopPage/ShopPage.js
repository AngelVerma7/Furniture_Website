import React, { useState, useEffect } from "react";
import "./ShopPage.css";
import BestSellerCard from '../Best Seller/BestSellerCard'
import Bed from "../img/Bed/Bed1.jpg"
import Sofa1 from "../img/Sofas/sofa.jpg"
import Sofa2 from "../img/Sofas/sofa2.jpg"
import Sofa3 from "../img/Sofas/sofa3.jpg"
import Sofa4 from "../img/Sofas/sofa4.jpg"
import Sofa5 from "../img/Sofas/sofa5.jpg"
import Cupboard from "../img/cupboard2.jpg"

export default function ShopPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [priceRange, setPriceRange] = useState([100, 20000]);

  const products = [
    { name: "Bed Design", price: 1400, category: "Bed", color: "white", material: "marble", image: Bed },
    { name: "White Wooden Wardrobe", price: 5500, category: "wardrobe", color: "White", material: "Wooden", image: Cupboard },
    { name: "Sofa", price: 1250, category: "Sofa", color: "clear", material: "fabric", image: Sofa1 },
    { name: "Sofa", price: 1250, category: "Sofa", color: "clear", material: "fabric", image: Sofa2 },
    { name: "Sofa", price: 1250, category: "Sofa", color: "clear", material: "fabric", image: Sofa3 },
    { name: "Sofa", price: 1250, category: "Sofa", color: "clear", material: "fabric", image: Sofa4 },
    { name: "Sofa", price: 1250, category: "Sofa", color: "clear", material: "fabric", image: Sofa5 },
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
            <option value="Bed">Bed</option>
            <option value="Sofa">Sofa</option>
            <option value="wardrobe">wardrobe</option>
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
