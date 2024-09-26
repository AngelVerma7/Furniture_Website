import React,{Component} from 'react'
import "../Category/category.css"
import Card from "./card";
import Chair from "../img/TVstand1.jpg"
import Bed from "../img/Bed/Bed1.jpg"
import Sofa from "../img/Sofas/sofa.jpg"
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
            <Card itemimg= {Cupboard} itemname="Wardrobe"/> 
            <Card itemimg= {Bed} itemname="Beds"/> 
            <Card itemimg= {Temple} itemname="Temple"/> 
            </div>
    </div>
    </>
  )
}
}
