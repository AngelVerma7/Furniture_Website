import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ShopPage.css";
import BestSellerCard from '../Best Seller/BestSellerCard'
import Bed from "../img/Bed/Bed1.jpg"
import Bed2 from "../img/Bed/Bed2.jpg"
import Temple from "../img/temple.jpg"
import TVstand1 from "../img/TVstand1.jpg"
import TVstand2 from "../img/TVstand2.jpg"
import Sofa1 from "../img/Sofas/sofa.jpg"
import Sofa2 from "../img/Sofas/sofa2.jpg"
import Sofa3 from "../img/Sofas/sofa3.jpg"
import Cupboard from "../img/cupboard2.jpg"
import DinningTable1 from "../img/dinningtable.jpg"
import DinningTable2 from "../img/dinningtable2.jpg"

export default function ShopPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [priceRange, setPriceRange] = useState([100, 10000]);
  useEffect(() => {
      window.scrollTo(0, 0);
      const searchParams = new URLSearchParams(location.search);
      const categoryFromURL = searchParams.get('category');
      if (categoryFromURL) {
        setCategory(categoryFromURL);
      }
    }, [location.search]);
  const products = [
    {id: 11, name: "Bed Design", price: 1400, category: "Bed", color: "white", material: "marble", image: Bed },
    {id: 12, name: "Wooden Wardrobe", price: 5500, category: "wardrobe", color: "White", material: "Wooden", image: Cupboard },
    {id: 13, name: "Sofa", price: 8000, category: "Sofa", color: "clear", material: "fabric", image: Sofa1 },
    {id: 14, name: "Bed", price: 1800, category: "Bed", color: "white", material: "marble", image: Bed2 },
    {id: 15, name: "Sofa", price: 7500, category: "Sofa", color: "clear", material: "fabric", image: Sofa2 },
    {id: 16, name: "Dinning Table", price: 1400, category: "DinningTable", color: "white", material: "Wooden", image: DinningTable1 },
    {id: 17, name: "Dinning Table Design", price: 1800, category: "DinningTable", color: "white", material: "Wooden", image: DinningTable2 },
    {id: 18, name: "Sofa", price: 8000, category: "Sofa", color: "clear", material: "fabric", image: Sofa3 },
    {id: 19, name: "TV Stand", price: 9000, category: "TVstand", color: "clear", material: "fabric", image: TVstand1 },
    {id: 20, name: "TV Stand Design", price: 6500, category: "Tvstand", color: "clear", material: "fabric", image: TVstand2 },
    {id: 21, name: "Temple Deisgn", price: 1400, category: "Temple", color: "white", material: "marble", image: Temple },
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
            min="0"
            max="10000"
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
