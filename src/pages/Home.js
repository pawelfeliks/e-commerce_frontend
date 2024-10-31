import React from "react";
import ProductCard from "../components/ProductCard";

function Home() {
    return (
        <div>
            <h2>Featured Products</h2>
            <div className="product-container">
                <ProductCard id={1} name="Herbal Tea" price={9.99} img="images/herbal-tea.jpg" />
                <ProductCard id={2} name="Vitamin C Supplement" price={12.99} img="images/vitamin-c.jpg" />
            </div>
        </div>
    );
}

export default Home;
