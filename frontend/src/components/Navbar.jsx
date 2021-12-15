import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-inner">
                <div className="navbar-left">
                    <a href="#" className="navbar-brand">
                        <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="Keep" />
                    </a>
                </div>
                <div className="navbar-right">
                    <a href="#">Logout</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;