import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav d-flex justify-content-between bg-blue'>
        <div className="nav-brand">
            <Link className="nav-link"  to='/'>LOGO</Link> 
        </div>
        <div className="nav-items">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Logout</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;
