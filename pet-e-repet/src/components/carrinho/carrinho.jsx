import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUTOS } from "../../productsList.tsx";
import { CartItem } from './cartItem'
import './carrinho.css'

export default function Carrinho() {
    /**
     * Este componente representa a página do carrinho de compras.
     * Utiliza o useContext para acessar as funções e estados definidos no contexto ShopContext.
     * Renderiza os itens no carrinho usando o componente CartItem.
     */
    const { itensCarrinho, getValorTotal } = useContext(ShopContext); // useContext é utilizado para acessar as funções e estados definidos no contexto ShopContext.

    const valorTotal = getValorTotal(); // Calcula o valor total do carrinho chamando a função getValorTotal do contexto.

    return (
        <div className="container">
            <div className="carrinho">
                <div className="cart-title"><h1>Carrinho</h1></div>
                <div className="cart-content">
                    <div className="cart-header">
                        <div className="head-produtos">
                            <h3>Produtos</h3>
                        </div>
                        <div className="head-outros">
                            <h3>Preço</h3>
                            <h3>Quantidade</h3>
                        </div>
                    </div>
                </div>
                <div className="cart-items">
                    {PRODUTOS.map((item) => { // Mapeia todos os produtos e renderiza apenas aqueles que têm quantidade maior que 0 no carrinho
                        if (itensCarrinho[item.id] !== 0) {
                            return <CartItem data={item} /> // Renderiza o componente CartItem para cada item no carrinho
                        }
                    })}
                </div>
            </div>
            <div className="separador"><svg xmlns="http://www.w3.org/2000/svg" width="2" height="621" viewBox="0 0 2 621" fill="none">
                <path d="M1 0L0.999973 621" stroke="#D0CED4" />
            </svg></div>
            <div className="form--compra">
                <div className="form-group">
                    <h3>Qual o CEP?</h3>
                    <input type="text" className="formCompra-input" placeholder="00000-000"></input>
                </div>
                <div className="form-group">
                    <h3>Escolha a forma de entrega:</h3>
                    <label className="labelRadio"><input type="radio" className="inputRadio" name="radio" />Entrega</label>
                    <label className="labelRadio"><input type="radio" className="inputRadio" name="radio" />Retirar na loja</label>
                </div>
                <div className="form-group">
                    <h3>Cupom de desconto:</h3>
                    <input type="text" className="formCompra-input" placeholder="Digite seu cupom"></input>
                </div>
                <div className="form-group">
                    <h3>Resumo do pedido:</h3>
                    <div className="row-valorTotal">
                        <p id="strong">Valor Total</p>
                        <p>R$ {valorTotal}</p>
                    </div>
                    <div className="row-prazoDeEntrega">
                        <p id="strong">Prazo de entrega</p>
                        <p>de 3 a 6 dias úteis</p>
                    </div>
                </div>
                <div className="total">
                    <h3>Total</h3>
                    <h3 className="total-preco">R$ {valorTotal}</h3>
                </div>
                <button>Finalizar compra</button>
            </div>


        </div>
    )
}