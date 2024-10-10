import React,{Component} from 'react'
import "../Category/category.css"
import Card from "./card";
import TVstand from "../img/tvstand/TVstand1.webp"
import Bed from "../img/Bed/Bed1.webp"
import Sofa from "../img/Sofas/sofa1.webp"
import DinningTable from "../img/dinningtable/dinningtable1.webp"
import Temple from "../img/temple/temple1.webp"
import Wardrobe from "../img/cupboard/cupboard1.webp"


export default class Category extends Component {
    render(){
  return (
    <>
   <div className="Livesection">
            <div className="heading">
                <div className="i2-name">Popular categories</div>
            </div>
            <div className="contents">
            <Card itemimg= {TVstand} itemname="TVstand"/>
            <Card itemimg= {DinningTable} itemname="DinningTable"/> 
            <Card itemimg= {Sofa} itemname="Sofa"/> 
            <Card itemimg= {Wardrobe} itemname="wardrobe"/> 
            <Card itemimg= {Bed} itemname="Bed"/> 
            <Card itemimg= {Temple} itemname="Temple"/> 
            </div>
    </div>
    </>
  )
}
}
