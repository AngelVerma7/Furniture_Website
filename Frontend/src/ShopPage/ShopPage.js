import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ShopPage.css";
import BestSellerCard from '../Best Seller/BestSellerCard'
import Bed1 from "../img/Bed/Bed1.webp"
import Bed2 from "../img/Bed/Bed2.webp"
import Temple from "../img/temple/temple1.webp"
import ceilinglouver from "../img/ceilinglouver/ceilinglouver.webp"
import door1 from "../img/door/door1.webp"
import door2 from "../img/door/door2.webp"
import Kitchen1 from "../img/kitchen/kitchen1.webp"
import Kitchen2 from "../img/kitchen/kitchen2.webp"
import Kitchen3 from "../img/kitchen/kitchen3.webp"
import TVstand1 from "../img/tvstand/TVstand1.webp"
import TVstand2 from "../img/tvstand/TVstand2.webp"
import TVstand3 from "../img/tvstand/TVstand3.webp"
import TVstand4 from "../img/tvstand/TVstand4.webp"
import Sofa1 from "../img/Sofas/sofa1.webp"
import Sofa2 from "../img/Sofas/sofa2.webp"
import Sofa3 from "../img/Sofas/sofa3.webp"
import Sofa4 from "../img/Sofas/sofa4.webp"
import Sofa5 from "../img/Sofas/sofa5.webp"
import Sofa6 from "../img/Sofas/sofa6.webp"
import Cupboard1 from "../img/cupboard/cupboard1.webp"
import Cupboard2 from "../img/cupboard/cupboard2.webp"
import Cupboard3 from "../img/cupboard/cupboard3.webp"
import DinningTable1 from "../img/dinningtable/dinningtable1.webp"
import DinningTable2 from "../img/dinningtable/dinningtable2.webp"

export default function ShopPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [priceRange, setPriceRange] = useState([500, 30000]);
  useEffect(() => {
      window.scrollTo(0, 0);
      const searchParams = new URLSearchParams(location.search);
      const categoryFromURL = searchParams.get('category');
      if (categoryFromURL) {
        setCategory(categoryFromURL);
      }
    }, [location.search]);
  const products = [
    {id: 1, name: "Bed Design", price: 1400, category: "Bed", color: "white", material: "marble", image: Bed1 },
    {id: 2, name: "Wooden Wardrobe", price: 5500, category: "wardrobe", color: "White", material: "Wooden", image: Cupboard1 },
    {id: 3, name: "Sofa", price: 8000, category: "Sofa", color: "clear", material: "fabric", image: Sofa1 },
    {id: 4, name: "Bed", price: 1800, category: "Bed", color: "white", material: "marble", image: Bed2 },
    {id: 5, name: "Sofa", price: 7500, category: "Sofa", color: "clear", material: "fabric", image: Sofa2 },
    {id: 6, name: "Dinning Table", price: 1400, category: "DinningTable", color: "white", material: "Wooden", image: DinningTable1 },
    {id: 7, name: "Dinning Table Design", price: 1800, category: "DinningTable", color: "white", material: "Wooden", image: DinningTable2 },
    {id: 8, name: "Sofa", price: 8000, category: "Sofa", color: "clear", material: "fabric", image: Sofa3 },
    {id: 9, name: "TV Stand", price: 9000, category: "TVstand", color: "clear", material: "fabric", image: TVstand1 },
    {id: 10, name: "TV Stand Design", price: 6500, category: "Tvstand", color: "clear", material: "fabric", image: TVstand2 },
    {id: 11, name: "Ceiling louver", price: 1500, category: "Ceiling louver", color: "white", material: "marble", image: ceilinglouver },
    {id: 12, name: "Door Design", price: 800, category: "door", color: "white", material: "marble", image: door1 },
    {id: 13, name: "Entrance Door", price: 1800, category: "door", color: "white", material: "marble", image: door2 },
    {id: 14, name: "Kitchen Design", price: 10000, category: "Kitchen", color: "white", material: "marble", image: Kitchen1 },
    {id: 15, name: "Kitchen Interior", price: 15000, category: "Kitchen", color: "white", material: "marble", image: Kitchen2 },
    {id: 16, name: "Kitchen Design", price: 20000, category: "Kitchen", color: "white", material: "marble", image: Kitchen3 },
    {id: 17, name: "Tv Stand Design", price: 5000, category: "TVstand", color: "white", material: "marble", image: TVstand3 },
    {id: 18, name: "TV Stand", price: 7500, category: "TVstand", color: "white", material: "marble", image: TVstand4 },
    {id: 19, name: "Wardrobe Design", price: 14000, category: "wardrobe", color: "white", material: "marble", image: Cupboard2 },
    {id: 20, name: "Wardrobe Design", price: 18000, category: "wardrobe", color: "white", material: "marble", image: Cupboard3 },
    {id: 21, name: "Temple Design", price: 1400, category: "Temple", color: "white", material: "marble", image: Temple },
    {id: 22, name: "Sofa Design", price: 1400, category: "Sofa", color: "white", material: "marble", image: Sofa4 },
    {id: 23, name: "Sofa set", price: 1400, category: "Sofa", color: "white", material: "marble", image: Sofa5 },
    {id: 24, name: "Sofa set Design", price: 1400, category: "Sofa", color: "white", material: "marble", image: Sofa6 },
  ];

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    if (selectedCategory === "") {
      navigate("/ShopPage"); 
    } else {
      navigate(`/ShopPage?category=${selectedCategory}`);
    }
  };
  
  const filteredProducts = products.filter((product) => {
    return (
      (category === "" || product.category === category) &&
      (color === "" || product.color === color) &&
      (material === "" || product.material === material) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
  });

  const handleShopPage = (product) => {
    navigate(`/ProductPage/${product.id}`, { state: { product} });
};
  return (
    <>
    <div className="shop-container">
      <div className="filter-section">
        <h3>Filters</h3>
        <div className="filter">
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="Bed">Bed</option>
            <option value="Ceiling louver">Ceiling louver</option>
            <option value="door">Door</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Sofa">Sofa</option>
            <option value="TVstand">TVstand</option>
            <option value="wardrobe">Wardrobe</option>
            <option value="Temple">Temple</option>
            <option value="DinningTable">Dinning Table</option>
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
            min="500"
            max="30000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          />
        </div>
      </div>

      {/* Right Section for Products */}
      <div className="product-section">
        <div className="Product-grid">
          {filteredProducts.map((product, index) => (
            <BestSellerCard 
            key={index} 
            image= {product.image} 
            name={product.name} 
            price={product.price} 
            OnCardClick={() => handleShopPage(product)}
            /> 
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
