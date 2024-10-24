// import React from "react";
import "../index.css";
import '../Navbar/topheader.css';
import {Link} from "react-router-dom";
import React,{useState, useEffect} from 'react'
import user from "../img/User.webp"
import Logo from "../img/Ecomm-Logo.webp"
import cart from "../img/cart.webp"

export default function Navbar(){
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const products = [
    { id: 1, name: 'Sofa', category: 'Living Room' },
    { id: 2, name: 'Ceiling louver', category: 'Living Room' },
    { id: 3, name: 'door', category: 'Living Room' },
    { id: 4, name: 'Bed', category: 'Living Room' },
    { id: 4, name: 'Kitchen', category: 'Living Room' },
    { id: 4, name: 'TVstand', category: 'Living Room' },
    { id: 4, name: 'wardrobe', category: 'Living Room' },
    { id: 5, name: 'Temple', category: 'Living Room' },
    { id: 6, name: 'DinningTable', category: 'Dining' },
  ];
  useEffect(() => {
    if (query) {
      const filteredSuggestions = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = () => {
    setQuery('');
    setSuggestions([]);
  };

  const handleFormsubmit = (event) => {
    event.preventDefault();
    console.log(`Search term: ${query}`);
    window.location.href = `/ShopPage?category=${query}`;
    setQuery('');
    setSuggestions([]);
  }
  
  console.log("some",query)
    return (<>
    <div className="n-wrapper" id="Navbar">
       {/* left */}
       <div className="n-left">
         <Link to="/Home"><div className="n-name"><button><img src={Logo} alt="" /></button></div></Link>
         <div className="n-list">
           <ul style={{ listStyleType: "none" }}>
           <li className="dropdown">
           <Link to="/ShopPage?category=Sofa">Living Room</Link>
             <div className="dropdown-content">
             <Link to="/ShopPage?category=Sofa">Sofas</Link>
             <Link to="/ShopPage?category=Temple">Temple</Link>
             <Link to="/ShopPage?category=TVstand">TV Stand</Link>
               </div></li>
             <li className="dropdown">
             <Link to="/ShopPage?category=DinningTable">Dinning Room</Link>
             <div className="dropdown-content">
             <Link to="/ShopPage?category=DinningTable">Dinning Table</Link>
             <Link to="/ShopPage?category=TVstand">TV Stand</Link>
               </div></li>
               <li className="dropdown">
               <Link to="/ShopPage?category=Bed">Bedroom</Link>
             <div className="dropdown-content">
             <Link to="/ShopPage?category=Sofa">Sofas</Link>
             <Link to="/ShopPage?category=Bed">Bed</Link>
             <Link to="/ShopPage?category=wardrobe">Wardrobe</Link>
               </div></li>
           </ul>
         </div>
       </div>
       

       <div className="n-right">
       <div className="search-box">
          <form onSubmit={handleFormsubmit} method="get">
              <input onChange={e => setQuery(e.target.value)} type="text" value={query} placeholder="Search for products..."/>
          </form>
          <ul>
        {suggestions.map((product) => (
          <Link to={`/ShopPage?category=${product.name}`}>
          <li key={product.id} onClick={() => handleSearch(product.name)}>
            {product.name}
          </li>
          </Link>
        ))}
      </ul>
        </div>
        
         <div className="nav-button"> 
          <Link to='/CartPage'>
         <button className=" n-button3"><img src={cart} alt="" /></button>
         </Link>
         <Link to="/login">
         <button className=" n-button4"><img src={user} alt="" /></button>
         </Link>
         </div>
         
        </div>
     </div>
     </>
        
    )
}
