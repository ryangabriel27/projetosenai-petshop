import React from "react";

function ArrayProdutos({ categoria }: { categoria: string }) {

    const data = [
        {
            foto: 'https://ortegapet.com.br/wp-content/uploads/2021/02/81z68IE7iQL._AC_SY606_.jpg',
            nome: 'Ração Pedigree Cachorro 10KG',
            categoria: 'Cachorro',
            preco: 'R$ 29,99',
            descricao: 'Ração para cachorro'

        },
        {
            foto: 'https://ortegapet.com.br/wp-content/uploads/2021/02/81z68IE7iQL._AC_SY606_.jpg',
            nome: 'Ração Pedigree Gato 10KG',
            categoria: 'Gato',
            preco: 'R$ 29,99',
            descricao: 'Ração para Gato'

        },
        {
            foto: 'https://ortegapet.com.br/wp-content/uploads/2021/02/81z68IE7iQL._AC_SY606_.jpg',
            nome: 'Ração Pedigree Peixe 10KG',
            categoria: 'Peixe',
            preco: 'R$ 29,99',
            descricao: 'Ração para Peixe'

        },
        {
            foto: 'https://ortegapet.com.br/wp-content/uploads/2021/02/81z68IE7iQL._AC_SY606_.jpg',
            nome: 'Ração Pedigree Aves 10KG',
            categoria: 'Aves',
            preco: 'R$ 29,99',
            descricao: 'Ração para Aves'
        }
    ]

    type Props = {
        foto: string;
        nome: string;
        categoria: string;
        preco: string;
        descricao: string;
    }

    return (
        <div>
            <ul>
                {data
                    .filter((item: Props) => categoria ? item.categoria.toLowerCase() === categoria.toLowerCase() : true)
                    .map((item: Props, index) => (
                        <li key={index}>
                            <img src={item.foto} alt="foto" /><br />
                            <h1>{item.nome}</h1>
                            <h2>{item.preco}</h2>
                            <p>{item.descricao}</p>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default ArrayProdutos;