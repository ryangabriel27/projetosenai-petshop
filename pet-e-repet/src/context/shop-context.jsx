import React, { createContext, useState } from "react";
import { PRODUTOS } from "../productsList.tsx"; // Importa o array com todos os produtos cadastrados

export const ShopContext = createContext(null); // Criando o contexto

const getQuantidadeDeProdutos = () => { // Função para inicializar a quantidade de produtos no carrinho como 0 para cada item, ou seja ela percorre toda o array de produtos e vai o adicionando ao carrinho, porém define a quantidade dos mesmos como 0, deixando assim invisiveis ao usuário
    let cart = {};
    for (let i = 1; i < PRODUTOS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => { // Função que permite fornecer o valor de contexto aos componentes.
    /**
     * O carrinho funciona da seguinte maneira: É como se tivessemos todos os produtos dentro dele porém apenas aqueles com quantidade maior que 0 serão exibidos e é isso que configuramos aqui.
     *  Ao criar o estado itensCarrinho, guardamos todos os produtos os cadastrados nele porém ao clicar no botão 'Comprar' aumentamos a quantidade de 0 para 1, dessa forma o produto é exibido na página do carrinho. 
     * Também notamos essa lógica quando reparamos no botão para definir a quantidade na nossa página se formos diminuindo a quantidade, quando ela chegar a 0, o produto é removido do carrinho
     */
    const [itensCarrinho, setItensCarrinho] = useState(getQuantidadeDeProdutos()); // Estado para adicionar os itens ao carrinho, o array possui o tamanho equivalente ao número de itens do array PRODUTOS

    const getValorTotal = () => { // Função para adiquirir o valorTotal de um carrinho
        let valorTotal = 0;
        for (const item in itensCarrinho) { // forEach que percorre todos os itens do carrinho
            if (itensCarrinho[item] > 0) { // Seleciona aqueles itens que tem uma quantidade > 0
                let itemInfo = PRODUTOS.find((product) => product.id === Number(item)); // Seleciona o id do produto
                valorTotal += itensCarrinho[item] * itemInfo.preco; // Pega o seu preço e atribui a variavel
            }
        }
        return valorTotal; // Retorna o valor total do carrinho
    };


    const addCarrinho = (itemId) => { // Adiciona 1 a quantidade do item no carrinho
        setItensCarrinho((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeCarrinho = (itemId) => { // Remove 1 da quantidade do item no carrinho
        setItensCarrinho((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateQuantidade = (novoValor, itemId) => { // Atualiza a quantidade do item no carrinho para o novo valor fornecido
        setItensCarrinho((prev) => ({ ...prev, [itemId]: novoValor }));
    };

    const contextValue = {  // Objeto contendo as funções e estados que serão disponibilizados através do contexto
        itensCarrinho,
        addCarrinho,
        updateQuantidade,
        removeCarrinho,
        getValorTotal
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
            {/* Renderiza os componentes filhos envoltos pelo contexto */}
        </ShopContext.Provider>
    );
};