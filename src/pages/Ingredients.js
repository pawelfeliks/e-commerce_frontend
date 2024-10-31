import React from "react";
import ProductCard from "../components/ProductCard";

function Ingredients() {
    return (
        <div>
            <h2>Our Ingredients</h2>
            <div className="product-container">
                <ProductCard id={7} name="Organic Ginger" price={7.99} img="images/ginger.jpg" />
                <ProductCard id={8} name="Turmeric Powder" price={8.99} img="images/turmeric.jpg" />
            </div>
        </div>
    );
}

export default Ingredients;
