import React, {Component} from "react";
import "./Intro.css";
import {Link } from "react-router-dom";

export default class Intro extends Component{
    render(){
      return(
        <>
        <div className="part1">
          <div className="Intro" id="Intro" >
            <div className="i-left">
              <div className="i-name">
                <span>New In</span>
                <span>New in from La Mia Case. Traditional craftmanship.</span>
              </div>
                <Link to="/ShopPage"><button className="button i-button">Shop Product</button></Link> 
            </div>
          </div>

    </div>
        </>
        )
    };
};