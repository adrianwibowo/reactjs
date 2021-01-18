import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <div style={nav}>
            <h1>Kodeakademia</h1>
            <ul style={myUl}>
                <li><Link style={link} to="/" >Home</Link></li>
                <li><Link style={link} to='/about'>About</Link></li>
                <li><Link style={link} to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;

const nav = {
    display: 'flex',
    background: '#fe024e',
    padding: '0 6rem',
    justifyContent: 'space-between',
    color: "#ffff",
    alignItems: "center"
}

const myUl = {
    listStyle: "none",
    display: "flex",
    justifyContent: 'space-between',
    width: '20%'
}

const link = {
    textDecoration: "none",
    color: '#fff'
}
