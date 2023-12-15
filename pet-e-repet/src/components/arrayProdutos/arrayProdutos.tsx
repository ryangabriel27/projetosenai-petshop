import React, { useContext } from "react";
import { PRODUTOS } from '../../productsList.tsx';
import { Props } from "../../productsList.tsx";
import { ShopContext } from '../../context/shop-context.jsx'

function ArrayProdutos({ categoria }: { categoria: string }) { 
    /**
    * Este componente renderiza cards de produtos com base na categoria fornecida como paramêtro.
    * Utiliza o useContext para acessar a função addCarrinho do contexto ShopContext.
    * A função addCarrinho é responsável por adicionar o item ao carrinho quando o botão "Comprar" é clicado.
    */
    const { addCarrinho } = useContext(ShopContext); // useContext é utilizado para acessar as funções e estados definidos no contexto ShopContext.

    return (
        /* Percorre todo o array com os produtos e cria um card para cada produto, filtrando-os pela sua devida categoria*/
        <div className="cardsProdutos">
            {PRODUTOS
                .filter((item: Props) => categoria ? item.categoria.toLowerCase() === categoria.toLowerCase() : true)
                .map((item: Props, index) => (
                    <div className="card">
                        <img src={item.foto} alt="pics"></img>
                        <h2>{item.nome}</h2>
                        <p>{item.descricao}</p>
                        <h1>R${item.preco}</h1>
                        <button onClick={() => addCarrinho(item.id)}>Comprar</button>
                    </div>
                ))}
        </div>
    )
}

export default ArrayProdutos;