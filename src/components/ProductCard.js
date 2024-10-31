import React from "react";

function ProductCard({ id, name, price, img }) {
    const addToCart = () => {
        console.log(`Added ${name} to cart.`);
    };

    return (
        <div className="product" data-id={id}>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
