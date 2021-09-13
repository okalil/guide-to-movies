import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guia dos Filmes | Encontre o seu filme aqui!</title>
      </Head>
      <div>
        <input placeholder="Procurar filme..." />
      </div>
      <aside>
        <span>Resultados da Busca</span>
        <ul>
          <li>
            <span>Filmes</span>
            <span>48</span>
          </li>
        </ul>
        <p>
          Dica: Você pode usar o filtro 'y:' para limitar seus resultados por
          ano. Exemplo: 'tropa de elite y:2007'
        </p>
      </aside>
      <main>
        <section>
          <img src="" alt="" />
          <h4>Os Vingadores</h4>
          <span>25 de abril de 2012</span>
          <p>Loki, o irmão de Thor ....</p>
        </section>
      </main>
    </div>
  );
}
