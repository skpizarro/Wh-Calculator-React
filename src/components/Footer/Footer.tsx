import React from 'react';

const Footer = () =>{
    const date:Date = new Date();
    return(
        
        <footer className="bg-dark text-white content-center">
            
            
            <span className="text-white">IAS Handyman({date.getFullYear()}) All rights Reserved</span>
        </footer>
    );
}

export default Footer;