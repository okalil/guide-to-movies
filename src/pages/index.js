import Head from 'next/head';
import styled from 'styled-components';
import { useState } from 'react';

import { useSearch } from '../contexts/SearchContext';

import SearchControl from '../components/SearchControl';
import FiltersBox from '../components/FiltersBox';
import Main from '../components/Main';
import ResultsHistory from '../components/History';

export default function Home() {
  const [currentFilter, setFilter] = useState('all');
  const [showHistory, setShowHistory] = useState(false);
  const { search } = useSearch();

  return (
    <Container>
      <Head>
        <title>Guia dos Filmes | Encontre o seu filme aqui!</title>
      </Head>
      <Header>
        <SearchControl />
        <HistoryButton
          style={
            showHistory ? { background: '#42b4e2', color: 'white' } : undefined
          }
          onClick={() => setShowHistory(b => !b)}
        >
          Histórico
        </HistoryButton>
      </Header>
      {search.data ? (
        <ResultsContainer>
          <Aside>
            <FiltersBox {...{ currentFilter, setFilter }} />
            <p>
              Dica: Você pode usar o filtro 'y:' para limitar seus resultados
              por ano. Exemplo: 'tropa de elite y:2007'
            </p>
          </Aside>
          {showHistory ? (
            <ResultsHistory {...{ currentFilter }} />
          ) : (
            <Main {...{ currentFilter }} />
          )}
        </ResultsContainer>
      ) : (
        <Landing>
          <h1>Guia dos Filmes</h1>
          <h2>Encontre filmes, seriados e pessoas! Busque agora!</h2>
        </Landing>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  padding: 1rem;
  width: min(100%, 1080px);
`;

const ResultsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;

  > :first-child {
    flex: 2;
  }

  > :last-child {
    flex: 5;
  }
`;

const Header = styled.header`
  display: flex;
  gap: 1rem;
  height: 2rem;

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
  padding: 0 0.5rem;
`;

const Aside = styled.aside`
  > :first-child {
    margin-bottom: 1rem;
  }

  > :last-child {
    color: #505050;
  }
`;

const Landing = styled.main`
  margin-top: 3rem;
  height: calc(100vh - 1rem);
  text-align: center;

  > :last-child {
    margin-top: 0.75rem;
    font-weight: 500;
  }
`;
