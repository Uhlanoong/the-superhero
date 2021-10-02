import React from 'react';
// import logo from '../Header/images/logo.jpg';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>BD drugs</h1>
            <h6>www.bddrugs.com is the First online drug index of Bangladesh.</h6>
            <p className ="fw-bold">Total Budget: 100 Million</p>
            <nav>
                <a href ="/home">Home</a>
                <a href ="/order">Order Us</a>
                <a href ="/branch">Branch Location</a>
                <a href ="/about">About Us</a>
                <a href ="/contact">Contact Us</a>
            </nav>
        </div>
    );
};

export default Header;