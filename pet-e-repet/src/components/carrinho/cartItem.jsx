import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export function CartItem(props) {

    const { id, nome, preco, foto } = props.data;

    const { cartItems, addToCart, removeFromCart} = useContext(ShopContext);

    return (
        <>
            <div className="cartItem">
                <div className="cart-produto">
                    <img src={foto} alt="cartImg" />
                    <h1>{nome}</h1>
                </div>
                <div className="cart-outros">
                    <div className="cart-preco">
                        <h3>R$ {preco}</h3>
                    </div>
                    <div className="cart-quantidade">
                        <button onClick={() => removeFromCart(id)}>-</button>
                        <h3>{cartItems[id]}</h3>
                        <button onClick={() => addToCart(id)}>+</button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
};
