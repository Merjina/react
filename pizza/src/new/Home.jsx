import React from 'react';
import './Home.css';
import images from '../images/img3.webp';

function Home() {
    return (
        <div>
            <h1>Pizza world 🍕</h1>
            <div className='one'>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">menu</a></li>
                    <li><a href="#services">services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
                <form className="d-flex">
                    <input className="form-control " type="text" placeholder="Search" />
                    <button className="btn btn-primary" type="button">Search</button>
                </form>
            </div>
            <div className="image">
                <img src={images} alt="Pizza" />
                <div className="text">
                    <h4>Less waiting more eating 😋</h4><br></br>
                    <button type='button' className="btn btn-outline-dark  btn-lg">Order now</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
