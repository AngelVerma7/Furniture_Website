import React,{Component} from 'react'
import "../Category/category.css"
import Card from "./card";


export default class Category extends Component {
    render(){
  return (
    <>
   <div className="Livesection">
            <div className="heading">
                <div className="i2-name">Popular categories</div>
            </div>
            <div className="contents">
            <Card itemimg= 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/GettyImages-1475799633-600x740.jpg' itemname="Chairs"/> 
            <Card itemimg= 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/GettyImages-1395945512-600x740.jpg' itemname="Tables"/> 
            <Card itemimg= 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/GettyImages-1854912433-600x740.jpg' itemname="Sofas"/> 
            <Card itemimg= 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/GettyImages-1490349783-600x740.jpg' itemname="Storage"/> 
            <Card itemimg= 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/GettyImages-1716610022-300x370.jpg' itemname="Beds"/> 
            <Card itemimg= 'https://ergocraft.vamtam.com/wp-content/uploads/2024/04/GettyImages-1936674560-300x370.jpg' itemname="Lamps"/> 
            </div>
    </div>
    </>
  )
}
}
