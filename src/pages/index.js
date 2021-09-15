import Head from 'next/head';

import { w185 } from '../constants/posterSizes';
import { imageBaseUrl } from '../constants/imageUrl';
import { useSearch } from '../contexts/SearchContext';

import Box from '../components/Box';
import SearchControl from '../components/SearchControl';

export default function Home() {
  const { search } = useSearch();
  const { data } = search;

  return (
    <div>
      <Head>
        <title>Guia dos Filmes | Encontre o seu filme aqui!</title>
      </Head>
      <SearchControl />
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
        {!data ? null : data.results && data.total_results ? (
          data.results.map(item => (
            <Box key={item.id}>
              <img
                src={
                  item.poster_path
                    ? imageBaseUrl.concat(w185, item.poster_path)
                    : ''
                }
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
