import React from 'react';


const Footer = () => {
    return(
        <div style={footer}>
            <h1>Footer</h1>
        </div>
    )
}

export default Footer;

const footer = {
    display: 'flex',
    background: '#fe024e',
    justifyContent: 'center',
    color: "#ffff",
    // alignItems: "flex-end",
    // position: "fixed",
    marginTop: "6rem",
    bottom: "0",
    width: "100%"
}