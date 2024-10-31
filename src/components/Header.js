import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Healthy Store</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/supplements">Supplements</Link></li>
                    <li><Link to="/herbs">Herbs</Link></li>
                    <li><Link to="/ingredients">Ingredients</Link></li>
                    <li><Link to="/cart">🛒 Cart</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
