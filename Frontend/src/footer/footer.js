import React, { Component } from 'react'
import '../footer/footer.css'

export default class footer extends Component {
  render() {
    return (
        <>
        <footer>
        <div className='body'>
            <div className='box1'>
            <h1>About Vishwakarma</h1>
                <div className='breakline'></div>
                <p>Situated at the intersection of historical beauty and contemporary excitement, Vishwakarma stands as the driving force and curator of the world’s most extraordinary designs from the 20th century onward.</p>
            </div>
            <div className='box2'>
                <h1>Meet Us</h1>
                <div className='breakline'></div>
                <ul>
               <li><a href='/#'>Call US: 123456789</a></li>
               <li><a href='/#'>Mail US: support@XYZ.com</a></li>
               <li><a href='/#'>Instagram</a></li>
               <li><a href='/#'>Facebook</a></li>
               <li><a href='/#'>Twitter</a></li>
            </ul>
            </div>
            <div className='box2'>
                <h1>Shop</h1>
                <div className='breakline'></div>
                <ul>
               <li><a href='/#'>Living Room</a></li>
               <li><a href='/#'>Dinning Room</a></li>
               <li><a href='/#'>Bedroom</a></li>
               <li><a href='/#'>Lighting</a></li>
            </ul>
            </div>
            <div className='box2'>
                <h1>Help & Support</h1>
                <div className='breakline'></div>
                <ul>
               <li><a href='/#'>Delivery & Return</a></li>
               <li><a href='/#'>Track Your Order</a></li>
               <li><a href='/#'>Terms & Conditions</a></li>
                </ul>
            </div>
            </div>
            </footer>
        </>
    )
  }
}
