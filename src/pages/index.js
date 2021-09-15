import Head from 'next/head';
import Box from '../components/Box';
import useFetch from '../hooks/useFetch';

import { imageBaseUrl } from '../constants/imageUrl';
import { w185 } from '../constants/posterSizes';

export default function Home() {
  const { data } = useFetch('/search/movie?query=Vingadores');

  console.log(!data ? 'Loading' : 'resposta chegou');

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
        {!data ? (
          <h4>Carregando...</h4>
        ) : data.results ? (
          data.results.map(item => (
            <Box key={item.id}>
              <img
                src={imageBaseUrl.concat(w185, item.poster_path)}
                alt="Poster"
              />
              <h4>{item.title}</h4>
              <span>{item.release_date}</span>
              <p>{item.overview}</p>
            </Box>
          ))
        ) : (
          <h4>Não foi possível carregar os dados!</h4>
        )}
      </main>
    </div>
  );
}
