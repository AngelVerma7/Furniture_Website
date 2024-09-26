import React from 'react'
import {Link } from "react-router-dom";
import "../Category/category.css"

export default function card(props){
  return (
    <>
    <div className='cards'>
    <Link to={`/ShopPage?category=${props.itemname}`}>
      <div className="Categoryimg">
      <img src={props.itemimg} alt="...?"/>
      </div>
      <div className="itemname">{props.itemname}</div>
      </Link>
      
    </div>
    </>
  );
};

