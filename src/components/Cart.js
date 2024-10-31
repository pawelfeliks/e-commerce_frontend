import React, { useState, useEffect } from "react";

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.map((item, index) => (
                <div key={index} className="cart-item">
                    <h4>{item.name}</h4>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
        </div>
    );
}

export default Cart;
