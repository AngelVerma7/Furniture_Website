import React from 'react'
import Navbar from "./Navbar/Navbar.js"
import Intro from "./Intro/Intro.js";
import LogIn from "./Login/LogIn.js";
import SignUp from "./Login/signup.js";
import OTP from "./Login/OTP.js";
import BestSeller from "./Best Seller/BestSeller.js";
import Category from "./Category/Category.js";
import Footer from "./footer/footer.js"
import ShopPage from './ShopPage/ShopPage.js';
import ProductPage from './ProductPage/ProductPage.js';
import CartPage from './CartPage/CartPage.js';
import { BrowserRouter,Routes, Route } from "react-router-dom";
//import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/login" element={<LogIn/>}></Route>
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      <Routes>
        <Route path="/otppage" element={<OTP/>}></Route>
      </Routes>
      <Routes>
        <Route path="/ShopPage" element={<ShopPage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/ProductPage" element={<ProductPage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/CartPage" element={<CartPage/>}></Route>
      </Routes>
      
      <Routes>
      <Route path="/" element={<Intro/>}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Category/>}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<BestSeller/>}></Route>
      </Routes>
      <Routes>
      <Route path="/Home" element={<Intro/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Home" element={<Category/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Home" element={<BestSeller/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
