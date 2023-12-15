import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export function CartItem(props) {
    /**
     * Este componente representa um item no carrinho de compras.
     * Utiliza o useContext para acessar as funções e estados definidos no contexto ShopContext.
     * Recebe as propriedades do item (id, nome, preco, foto) como props.
     */
    const { id, nome, preco, foto } = props.data;

    const { itensCarrinho, addCarrinho, removeCarrinho } = useContext(ShopContext); // useContext é utilizado para acessar as funções e estados definidos no contexto ShopContext.

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
                        <button onClick={() => removeCarrinho(id)}>-</button>
                        <h3>{itensCarrinho[id]}</h3>
                        <button onClick={() => addCarrinho(id)}>+</button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
};
