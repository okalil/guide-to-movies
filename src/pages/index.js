import Head from 'next/head';
import styled from 'styled-components';
import { useState } from 'react';

import SearchControl from '../components/SearchControl';
import FiltersBox from '../components/FiltersBox';
import Main from '../components/Main';
import ResultsHistory from '../components/History';

export default function Home() {
  const [currentFilter, setFilter] = useState('all');
  const [showHistory, setShowHistory] = useState(false);

  return (
    <Container>
      <Head>
        <title>Guia dos Filmes | Encontre o seu filme aqui!</title>
      </Head>
      <Header>
        <SearchControl />
        <HistoryButton
          style={showHistory ? { background: '#5cb8ef' } : undefined}
          onClick={() => setShowHistory(b => !b)}
        >
          Histórico
        </HistoryButton>
      </Header>
      <aside>
        <FiltersBox {...{ currentFilter, setFilter }} />
        <p>
          Dica: Você pode usar o filtro 'y:' para limitar seus resultados por
          ano. Exemplo: 'tropa de elite y:2007'
        </p>
      </aside>
      {showHistory ? (
        <ResultsHistory {...{ currentFilter }} />
      ) : (
        <Main {...{ currentFilter }} />
      )}
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
`;

const Header = styled.header`
  grid-column: span 2;
  display: flex;
  gap: 1rem;

  > :first-child {
    flex: 1;
  }
`;

const HistoryButton = styled.button`
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  padding: 0 0.25rem;
`;
