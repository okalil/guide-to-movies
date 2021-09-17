import styled from 'styled-components';
import { useSearch } from '../../contexts/SearchContext';
import Main from '../Main';

export const Container = styled.div`
  text-align: center;

  > :first-child {
    margin-bottom: 0.75rem;
  }
`;

export default function ResultsHistory({ currentFilter }) {
  const { history } = useSearch();

  return (
    <Container>
      <h2>
        {!history[0]
          ? 'Faça uma nova busca e veja o seu histórico aqui.'
          : 'Histórico de resultados'}
      </h2>
      {history.map((result, i) => {
        return <Main key={i} {...{ currentFilter, historyData: result }} />;
      })}
    </Container>
  );
}
