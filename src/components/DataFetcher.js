import React, { useEffect, useState } from 'react';

// Simulação de posts
const posts = [
  {
    id: 1,
    title: "A origem do Cavaleiro das Trevas",
    body: "O Batman, o Cavaleiro das Trevas, é um dos heróis mais icônicos do universo dos quadrinhos. Sua origem é marcada pela tragédia: quando Bruce Wayne ainda era uma criança, ele viu seus pais serem mortos em um assalto em Gotham City. Esse evento traumatizante o motivou a se tornar o Batman, um vigilante sem poderes, mas com habilidades físicas excepcionais, inteligência aguçada e um arsenal de tecnologia.",
  },
  {
    id: 2,
    title: "A Incrível Vida Subaquática de Bob Esponja",
    body: "Bob Esponja é o habitante mais otimista e divertido da Fenda do Biquíni. Trabalhando como cozinheiro no Krusty Krab, ele sempre tem um sorriso no rosto e é conhecido por sua lealdade ao seu melhor amigo, Patrick Estrela. Sempre em busca de novas aventuras, Bob Esponja se envolve em situações malucas, mas seu coração puro e sua boa vontade sempre o guiam.",
  },
  {
    id: 3,
    title: "Batman vs Bob Esponja: Quem Venceria?",
    body: "Imagine um cenário onde o Cavaleiro das Trevas e o otimista Bob Esponja se encontram em uma luta épica! De um lado, temos o Batman, um mestre das artes marciais e estrategista imbatível. De outro, Bob Esponja, o ser indestrutível do fundo do mar, com uma habilidade única de resolver qualquer problema com seu entusiasmo e criatividade. Quem levaria a melhor? Batman provavelmente teria vantagem em termos de habilidades e experiência, mas Bob Esponja nunca subestimaria o poder de sua alegria contagiante e sua amizade incondicional. E, claro, ele sempre poderia contar com a ajuda de Patrick e Sandy!",
  },
  {
    id: 4,
    title: "A Batcaverna: O Refúgio Secreto do Cavaleiro das Trevas",
    body: "A Batcaverna não é apenas um esconderijo secreto, mas o centro de operações do Batman. Localizada sob a Mansão Wayne, a Batcaverna é equipada com uma infinidade de recursos, incluindo computadores avançados, veículos especializados como o Batmóvel, e a icônica Bat-Sinal. Ela também serve como o local onde Batman planeja suas estratégias e mantém informações sobre todos os seus inimigos. Mas a Batcaverna também é um reflexo da solidão de Bruce Wayne. É o único lugar onde ele pode estar consigo mesmo e refletir sobre sua missão, longe das distrações de Gotham.",
  },
  {
    id: 5,
    title: "A Maré de Emoções: Bob Esponja Enfrentando Seus Medos",
    body: "Apesar de ser uma esponja animada e cheia de vida, Bob Esponja tem seus momentos de vulnerabilidade. Em episódios como O Medo de Sair da Casa e Bob Esponja e o Medo de Nadar, vemos que até mesmo o herói do fundo do mar tem suas inseguranças. No entanto, o que torna Bob Esponja tão especial é sua capacidade de superar seus medos e ainda manter uma atitude positiva. Cada episódio de Bob Esponja é uma lição sobre amizade, coragem e como enfrentar os desafios com um sorriso no rosto, mesmo quando as coisas não vão do jeito que ele espera.",
  },
];

function DataFetcher() {
  const [data, setData] = useState([]);
  
  // Simulando um delay como se fosse uma requisição real
  useEffect(() => {
    setTimeout(() => {
      setData(posts);  // Simula o carregamento dos posts
    }, 1000); // Aguarda 1 segundo antes de carregar os posts
  }, []);

  return (
    <div className="data-fetcher">
      <h2>Lista de Posts</h2>
      <div className="posts">
        {data.length === 0 ? (
          <p>Carregando posts...</p>  // Mensagem de carregamento enquanto os dados estão sendo simulados
        ) : (
          data.map((post) => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DataFetcher;
