import Head from 'next/head';
import Box from '../components/Box';

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
        <Box>
          <span>Resultados da Busca</span>
          <ul>
            <li>
              <span>Filmes</span>
              <span>48</span>
            </li>
          </ul>
        </Box>
        <p>
          Dica: Você pode usar o filtro 'y:' para limitar seus resultados por
          ano. Exemplo: 'tropa de elite y:2007'
        </p>
      </aside>
      <main>
        <Box>
          <img src="" alt="" />
          <h4>Os Vingadores</h4>
          <span>25 de abril de 2012</span>
          <p>Loki, o irmão de Thor ....</p>
        </Box>
      </main>
    </div>
  );
}
