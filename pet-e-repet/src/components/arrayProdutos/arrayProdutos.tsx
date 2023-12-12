import React, { useContext } from "react";
import { PRODUTOS } from '../../productsList.tsx';
import { Props } from "../../productsList.tsx";
import { ShopContext } from "../../context/shop-context.jsx";

function ArrayProdutos({ categoria }: { categoria: string }) {

    const { addToCart } = useContext(ShopContext);

    return (
        <div className="cardsProdutos">
                {data
                    .filter((item: Props) => categoria ? item.categoria.toLowerCase() === categoria.toLowerCase() : true)
                    .map((item: Props, index) => (
                        <div className="card">
                            <img src={item.foto}></img>
                            <h2>{item.nome}</h2>
                            <p>{item.descricao}</p>
                            <h1>{item.preco}</h1>
                            <button>Comprar</button>
                        </div>
                    ))}
        </div>
    )
}

export default ArrayProdutos;