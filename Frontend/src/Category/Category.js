import React,{Component} from 'react'
import "../Category/category.css"
import Card from "./card";
import TVstand from "../img/TVstand1.jpg"
import Bed from "../img/Bed/Bed1.jpg"
import Sofa from "../img/Sofas/sofa.jpg"
import DinningTable from "../img/dinningtable.jpg"
import Temple from "../img/temple.jpg"
import Wardrobe from "../img/cupboard2.jpg"


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
