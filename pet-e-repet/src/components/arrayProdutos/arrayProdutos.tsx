import React, { useContext } from "react";
import { PRODUTOS } from '../../productsList.tsx';
import { Props } from "../../productsList.tsx";
import { ShopContext } from '../../context/shop-context.jsx'

function ArrayProdutos({ categoria }: { categoria: string }) { /* Categoria é colocada como parâmetro, pois, por exemplo, ao ir até a página para cachorros deve-se exibir apenas os produtos da categoria cachorro*/

    const { addToCart } = useContext(ShopContext);  // Função para adicionar o item ao carrinho

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
                        <h1>R$ {item.preco}</h1>
                        <button onClick={() => addToCart(item.id)}>Comprar</button>
                    </div>
                ))}
        </div>
    )
}

export default ArrayProdutos;