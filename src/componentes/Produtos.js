import { StyledProduto } from "./estilos/Produtos.style";
import Image from "./Image";


function Produtos() {
    const produtos = [
        {
            "id": 1,
            "title": "Produto 1",
            "description": "Descrição detalhada do produto 1.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 2,
            "title": "Produto 2",
            "description": "Descrição detalhada do produto 2.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 3,
            "title": "Produto 3",
            "description": "Descrição detalhada do produto 3.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 4,
            "title": "Produto 4",
            "description": "Descrição detalhada do produto 4.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 5,
            "title": "Produto 5",
            "description": "Descrição detalhada do produto 5.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 6,
            "title": "Produto 6",
            "description": "Descrição detalhada do produto 6.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 7,
            "title": "Produto 7",
            "description": "Descrição detalhada do produto 7.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 8,
            "title": "Produto 8",
            "description": "Descrição detalhada do produto 8.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 9,
            "title": "Produto 9",
            "description": "Descrição detalhada do produto 9.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 10,
            "title": "Produto 10",
            "description": "Descrição detalhada do produto 10.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 11,
            "title": "Produto 11",
            "description": "Descrição detalhada do produto 11.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 12,
            "title": "Produto 12",
            "description": "Descrição detalhada do produto 12.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 13,
            "title": "Produto 13",
            "description": "Descrição detalhada do produto 13.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 14,
            "title": "Produto 14",
            "description": "Descrição detalhada do produto 14.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 15,
            "title": "Produto 15",
            "description": "Descrição detalhada do produto 15.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 16,
            "title": "Produto 16",
            "description": "Descrição detalhada do produto 16.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 17,
            "title": "Produto 17",
            "description": "Descrição detalhada do produto 17.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 18,
            "title": "Produto 18",
            "description": "Descrição detalhada do produto 18.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 19,
            "title": "Produto 19",
            "description": "Descrição detalhada do produto 19.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        },
        {
            "id": 20,
            "title": "Produto 20",
            "description": "Descrição detalhada do produto 20.",
            "imageUrl": "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-iii-202223-jogador-masculina/38/JD8-5069-138/JD8-5069-138_zoom1.jpg?ts=1697047284?ims=400x"
        }]

    return (
        produtos.map((produtos) => {
            return (

                <StyledProduto key={produtos.id}>
                    <Image url={produtos.imageUrl} id={produtos.id} />
                    <p>{produtos.title}</p>
                    <p>{produtos.description}</p>
                </StyledProduto>

            )
        }
        )
    )

}

export default Produtos;