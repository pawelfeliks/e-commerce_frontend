import React from "react";
import ProductCard from "../components/ProductCard";

function Herbs() {
    return (
        <div>
            <h2>Our Herbs</h2>
            <div className="product-container">
                <ProductCard id={5} name="Chamomile" price={5.99} img="images/chamomile.jpg" />
                <ProductCard id={6} name="Peppermint" price={6.99} img="images/peppermint.jpg" />
            </div>
        </div>
    );
}

export default Herbs;
