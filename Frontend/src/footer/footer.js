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
                <li>Mr. Tarsem Singh</li>
               <li><a href='tel:+9855104649'>Call US: +91 98551 04649</a></li>
               <li><a href='https://www.instagram.com/vww3233/' target="_blank" rel="noopener noreferrer">Instagram</a></li>
               <li><a href='https://www.facebook.com/profile.php?id=100063855797319' target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
            </div>
            <div className='box2'>
                <h1>Address</h1>
                <div className='breakline'></div>
                <p>Shop no 32 chungiyan Road Kharar, Kharar, India, 140301</p>
            </div>
            </div>
            </footer>
        </>
    )
  }
}
