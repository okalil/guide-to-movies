import Head from 'next/head';
import styled from 'styled-components';
import { useState } from 'react';

import SearchControl from '../components/SearchControl';
import FiltersBox from '../components/FiltersBox';
import Main from '../components/Main';

export default function Home() {
  const [currentFilter, setFilter] = useState('all');

  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 2rem 1fr;
  column-gap: 1rem;
  row-gap: 1.25rem;

  width: min(100%, 1080px);
  margin: auto;
  padding: 1rem;

  > :first-child {
    grid-column: span 2;
  }
`;
