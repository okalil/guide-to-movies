import Head from 'next/head';
import { useState } from 'react';

import { useSearch } from '../contexts/SearchContext';

import SearchControl from '../components/SearchControl';
import FiltersBox from '../components/FiltersBox';
import Main from '../components/Main';

export default function Home() {
  const { search } = useSearch();
  const { data, keyword } = search;

  const [currentFilter, setFilter] = useState('all');

  return (
    <div>
      <Head>
        <title>Guia dos Filmes | Encontre o seu filme aqui!</title>
      </Head>
      <SearchControl />
      <aside>
        <FiltersBox {...{ currentFilter, setFilter }} />
        <p>
          Dica: Você pode usar o filtro 'y:' para limitar seus resultados por
          ano. Exemplo: 'tropa de elite y:2007'
        </p>
      </aside>
      <Main {...{ currentFilter }} />
    </div>
  );
}
