import React,{Component} from 'react'
import "../Category/category.css"
import Card from "./card";
import Chair from "../img/TVstand.jpg"
import Bad from "../img/Bad.jpg"
import Sofa from "../img/sofa.jpg"
import Kitchen from "../img/kitchen.jpg"
import Temple from "../img/temple.jpg"
import Cupboard from "../img/cupboard2.jpg"


export default class Category extends Component {
    render(){
  return (
    <>
   <div className="Livesection">
            <div className="heading">
                <div className="i2-name">Popular categories</div>
            </div>
            <div className="contents">
            <Card itemimg= {Chair} itemname="TV Stand"/> 
            <Card itemimg= {Kitchen} itemname="Kitchen"/> 
            <Card itemimg= {Sofa} itemname="Sofas"/> 
            <Card itemimg= {Cupboard} itemname="CupbBard"/> 
            <Card itemimg= {Bad} itemname="Beds"/> 
            <Card itemimg= {Temple} itemname="Temple"/> 
            </div>
    </div>
    </>
  )
}
}
