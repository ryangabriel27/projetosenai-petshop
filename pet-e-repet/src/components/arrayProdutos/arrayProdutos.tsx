import React from "react";

function ArrayProdutos({ categoria }: { categoria: string }) {

    const data = [
        //cachorros
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-royal-canin-boxer-para-caes-adultos-12-0kg-90081/284067-1.jpg',
            nome: 'Ração Royal Canin Boxer',
            categoria: 'Cachorros',
            preco: 'R$336,00',
            descricao: 'Para Cães Adultos 12,0kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-premier-selecao-natural-caes-adultos-frango-korin-12kg-92315/286307-1.jpg',
            nome: 'Ração PremieR Seleção Natural',
            categoria: 'Cachorros',
            preco: 'R$262,71',
            descricao: 'Para Cães Adultos Frango Korin 12kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-hills-science-diet-para-caes-adultos-de-racas-grandes-12kg-96515/290518.jpg',
            nome: 'Ração Hills Science Diet',
            categoria: 'Cachorros',
            preco: 'R$431,99',
            descricao: 'Para Cães Adultos De Raças Grandes 12kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-ned-quinoa-digestion-para-cachorros-adultos-800gr-93105/287104-1.jpg',
            nome: 'Ração N&D Quinoa Digestion',
            categoria: 'Cachorros',
            preco: 'R$92,70',
            descricao: 'Para cachorros adultos 800gr'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-guabi-natural-caes-adultos-racas-medias-frango-e-arroz-12kg-96794/290797-1.jpg',
            nome: 'Ração Guabi Natural',
            categoria: 'Cachorros',
            preco: 'R$239,31',
            descricao: 'Para Cães Adultos Raças Médias Frango e Arroz 12kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-nestle-purina-pro-plan-cachorros-adultos-racas-medias-frango-15kg-90147/284133.jpg',
            nome: 'Ração Nestlé Purina Pro Plan',
            categoria: 'Cachorros',
            preco: 'R$319,41',
            descricao: 'Para Cachorros Adultos Raças Médias Frango 15kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-golden-formula-caes-adultos-salmao-e-arroz-3kg-94788/288791.jpg',
            nome: 'Ração GoldeN Formula',
            categoria: 'Cachorros',
            preco: 'R$57,15',
            descricao: 'Para Cães Adultos Salmão e Arroz 3kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-granplus-menu-caes-filhotes-carne-e-arroz-20kg-96256/290259-7.jpg',
            nome: 'Ração Granplus Menu',
            categoria: 'Cachorros',
            preco: 'R$210,51',
            descricao: 'Para Cães Filhotes Carne e Arroz 20kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-prime-special-dog-para-cachorros-adultos-de-racas-grandes-com-15kg-89222/283208-1.jpg',
            nome: 'Ração Prime Special Dog',
            categoria: 'Cachorros',
            preco: 'R$194,31',
            descricao: 'Para Cachorros Adultos de Raças Grandes com 15kg'
        },

        //gatos
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-royal-canin-veterinary-diet-urinary-s-o-para-gatos-10-1kg-96944/290950-1.jpg',
            nome: 'Ração Royal Canin Veterinary Diet Urinary',
            categoria: 'Gatos',
            preco: 'R$510,93',
            descricao: 'S/O para Gatos 10,1kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-premier-selecao-natural-gatos-adultos-castrados-frango-7-5kg-96219/290222-1.jpg',
            nome: 'Ração PremieR Seleção Natural',
            categoria: 'Gatos',
            preco: 'R$235,98',
            descricao: 'Para Gatos Adultos Castrados Frango 7,5kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-ned-quinoa-digestion-para-gatos-adultos-cordeiro-erva-doce-e-hortela-7-5kg-93119/287118.jpg',
            nome: 'Ração N&D Quinoa Digestion',
            categoria: 'Gatos',
            preco: 'R$454,95',
            descricao: 'Para gatos adultos cordeiro, erva-doce e hortelã 7,5kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-guabi-natural-grain-free-gatos-adultos-castrados-salmao-e-lentilha-7-5kg-94681/288684-9.jpg',
            nome: 'Ração Guabi Natural Grain Free',
            categoria: 'Gatos',
            preco: 'R$267,21',
            descricao: 'Para gatos adultos castrados salmão e lentilha 7,5kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-nestle-purina-pro-plan-trato-urinario-para-gatos-adultos-sabor-frango-7-5kg-97201/291221-1.jpg',
            nome: 'Ração Nestlé Purina Pro Plan Trato Urinário',
            categoria: 'Gatos',
            preco: 'R$397,44',
            descricao: 'Para Gatos Adultos Sabor Frango 7,5kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-golden-selecao-natural-gatos-castrados-frango-abobora-e-alecrim-10-1kg-94614/288617-1.jpg',
            nome: 'Ração GoldeN Seleção Natural',
            categoria: 'Gatos',
            preco: 'R$168,21',
            descricao: 'Para gatos castrados frango, abóbora e alecrim 10,1kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-granplus-gourmet-gatos-adultos-castrados-ovelha-e-arroz-pacotes-individuais-10-1kg-89684/283670-8.jpg',
            nome: 'Ração GranPlus Gourmet',
            categoria: 'Gatos',
            preco: 'R$168,21',
            descricao: 'Para Gatos Adultos Castrados Ovelha e Arroz Pacotes Individuais 10,1kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-special-cat-ultralife-castrados-senior-10-20kg-sabor-salmao-batata-doce-mandioca-beterraba-97165/291185-1.jpg',
            nome: 'Ração Special Cat Ultralife',
            categoria: 'Gatos',
            preco: 'R$168,21',
            descricao: 'Para Gatos Castrados Sênior 10+ 20kg Sabor Salmão, Batata-Doce, Mandioca, Beterraba e Arroz'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-royal-canin-sterilised-gatos-adultos-castrados-10-1kg-96394/290397-1.jpg',
            nome: 'Ração Royal Canin Sterilised',
            categoria: 'Gatos',
            preco: 'R$168,21',
            descricao: 'Para Gatos Adultos Castrados 10,1kg'
        },

        //aves
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-seca-megazoo-para-papagaio-tropical-6-0kg-99011/293073.jpg',
            nome: 'Ração Seca Megazoo',
            categoria: 'Aves',
            preco: 'R$443,07',
            descricao: 'Para Papagaio Tropical 6,0kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-nutropica-para-calopsitas-selecao-natural-5-0-kg-94997/289000.jpg',
            nome: 'Ração Nutrópica para Calopsitas',
            categoria: 'Aves',
            preco: 'R$315,18',
            descricao: 'Seleção Natural 5,0 kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/mistura-passaro-forte-para-canarios-5-0kg-96138/290141.jpg',
            nome: 'Mistura Pássaro Forte',
            categoria: 'Aves',
            preco: 'R$60,93',
            descricao: 'Para canários 5,0kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-seca-megazoo-mix-para-calopsitas-6-0kg-99021/293083.jpg',
            nome: 'Ração Seca Megazoo Mix',
            categoria: 'Aves',
            preco: 'R$333,27',
            descricao: 'Para Calopsitas 6,0kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-nutropica-para-papagaios-extrusada-com-frutas-5kg-93656/287655-1.jpg',
            nome: 'Ração Nutrópica para Papagaios',
            categoria: 'Aves',
            preco: 'R$333,27',
            descricao: 'Extrusada com Frutas 5kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/mistura-passaro-forte-para-araras-cacatuas-e-papagaios-1kg-90287/284273.jpg',
            nome: 'Mistura Pássaro Forte',
            categoria: 'Aves',
            preco: 'R$32,58',
            descricao: 'Para Araras, Cacatuas e Papagaios 1kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/alimento-seco-megazoo-papa-para-loris-900gr-99015/293077.jpg',
            nome: 'Alimento Seco Megazoo',
            categoria: 'Aves',
            preco: 'R$114,30',
            descricao: 'Papa para Loris 900gr'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-nutropica-para-araras-natural-5kg-94770/288773.jpg',
            nome: 'Ração Nutrópica para Araras',
            categoria: 'Aves',
            preco: 'R$292,86',
            descricao: 'Natural 5kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/alimento-passaro-forte-extrusado-para-papagaios-1kg-90420/284406.jpg',
            nome: 'Alimento Pássaro Forte',
            categoria: 'Aves',
            preco: 'R$22,41',
            descricao: 'Para Papagaios 1kg'
        },

        //peixes
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-poytara-carpa-6x1-6-0kg-93975/287977-1.jpg?w=400&h=400&v=no-change&qs=ignore',
            nome: 'Ração Poytara',
            categoria: 'Peixes',
            preco: 'R$411,93',
            descricao: 'Carpa 6x1 6,0kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-nutral-para-peixes-carpas-4kg-91748/285737.jpg?w=400&h=400&v=no-change&qs=ignore',
            nome: 'Ração Nutral para Peixes',
            categoria: 'Peixes',
            preco: 'R$387,90',
            descricao: 'Carpas 4kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-tetra-tetramin-flakes-para-peixes-200gr-95948/289951.jpg?w=400&h=400&v=no-change&qs=ignore',
            nome: 'Ração Tetra Tetramin Flakes',
            categoria: 'Peixes',
            preco: 'R$137,16',
            descricao: 'Para Peixes 200gr'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-poytara-carpa-6x1-1-5kg-93976/287978-1.jpg?w=400&h=400&v=no-change&qs=ignore',
            nome: 'Ração Poytara',
            categoria: 'Peixes',
            preco: 'R$129,06',
            descricao: 'Carpa 6x1 1,5kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-nutral-para-peixes-carpas-2kg-91746/285735.jpg?w=400&h=400&v=no-change&qs=ignore',
            nome: 'Ração Nutral para Peixes',
            categoria: 'Peixes',
            preco: 'R$228,51',
            descricao: 'Carpas 2kg'
        },

        //outros
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-megazoo-para-porquinho-da-india-com-5kg-97627/291676.jpg?w=400&h=400&v=no-change&qs=ignore',
            nome: 'Ração Megazoo',
            categoria: 'Outros',
            preco: 'R$324,54',
            descricao: 'Para porquinho da Índia com 5kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-para-mini-coelho-500gr-88876/282862.jpg?w=400&h=400&v=no-change&qs=ignore',
            nome: 'Ração Alcon Club',
            categoria: 'Outros',
            preco: 'R$40,77',
            descricao: 'Para Mini Coelho 500gr'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-seca-megazoo-extrusada-para-hamsters-e-gerbils-3-0kg-99016/293078.jpg?w=400&h=400&v=no-change&qs=ignore',
            nome: 'Ração Seca Megazoo Extrusada',
            categoria: 'Outros',
            preco: 'R$181,26',
            descricao: 'Para Hamsters e Gerbils 3,0kg'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-para-roedores-500gr-89962/283948.jpg?w=400&h=400&v=no-change&qs=ignore',
            nome: 'Ração Alcon Club',
            categoria: 'Outros',
            preco: 'R$30,69',
            descricao: 'Para Roedores 500gr'
        },
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/racao-megazoo-para-coelhos-ornamentais-com-1-2kg-97625/291674.jpg?w=400&h=400&v=no-change&qs=ignore',
            nome: 'Ração Megazoo',
            categoria: 'Outros',
            preco: 'R$83,61',
            descricao: 'Para Coelhos Ornamentais com 1,2kg'
        },

        //casa e lazer
        {
            foto: 'https://polipet.fbitsstatic.net/img/p/adaptil-difusor-com-refil-ceva-48ml-para-cachorros-96467/290470-4.jpg?w=420&h=420&v=no-change&qs=ignore',
            nome: 'Adaptil Difusor com Refil',
            categoria: 'Casa & Lazer',
            preco: 'R$216,45',
            descricao: 'Ceva 48ml para Cachorros'
        },

    ]

    type Props = {
        foto: string;
        nome: string;
        categoria: string;
        preco: string;
        descricao: string;
    }

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