import React, {useEffect} from "react";
import "./Intro.css";
import {Link } from "react-router-dom";

const Intro = () =>{
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
      return(
        <>
        <div className="part1">
          <div className="Intro" id="Intro" >
            <div className="i-left">
              <div className="i-name">
                <span>Welcome to Vishwakarma Woodworks.</span>
                <span>New in from Vishwakarma Woodworks. Traditional craftmanship.</span>
              </div>
                <Link to="/ShopPage"><button className="button i-button">Shop Product</button></Link> 
            </div>
          </div>

    </div>
        </>
        )
 
};

export default Intro;