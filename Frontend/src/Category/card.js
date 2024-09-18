import React from 'react'
import "../Category/category.css"
import {Link } from "react-router-dom";

export default function card(props){
  return (
    <>
    <div className='cards'>
    <Link to="/#">
      <div className="Categoryimg">
      <img src={props.itemimg} alt="...?"/>
      </div>
      <div className="itemname">{props.itemname}</div>
      </Link>
      
    </div>
    </>
  );
};

