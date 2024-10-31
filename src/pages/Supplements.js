import React from "react";
import ProductCard from "../components/ProductCard";

function Supplements() {
    return (
        <div>
            <h2>Our Supplements</h2>
            <div className="product-container">
                <ProductCard id={3} name="Omega-3 Capsules" price={19.99} img="images/omega3.jpg" />
                <ProductCard id={4} name="Probiotic Blend" price={15.99} img="images/probiotic.jpg" />
            </div>
        </div>
    );
}

export default Supplements;
