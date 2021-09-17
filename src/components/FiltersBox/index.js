import React from 'react';

import { useSearch } from '../../contexts/SearchContext';
import filterByYear from '../../utils/filterByYear';

import Box from '../Box';
import { Title, Filter } from './styles';

export default function FiltersBox({ currentFilter, setFilter }) {
  const { search } = useSearch();
  const { keyword, data } = search;

  function results(current) {
    const items = data?.results.filter(item => item.media_type === current);
    const [_, year] = keyword.split('y:');
    const total = keyword.includes('y:')
      ? filterByYear(items, year).length
      : items?.length;

    return total;
  }
  function totalResults(type) {
    return results(type) || 0;
  }

  const filters = [
    { name: 'Filmes', totalResults: totalResults('movie'), type: 'movie' },
    { name: 'Seriados', totalResults: totalResults('tv'), type: 'tv' },
    { name: 'Pessoas', totalResults: totalResults('person'), type: 'person' },
  ];

  return (
    <Box>
      <Title>Resultados da Busca</Title>
      <ul>
        {filters.map(({ name, totalResults, type }) => {
          const selected = currentFilter === type;
          return (
            <Filter
              onClick={() => setFilter(selected ? 'all' : type)}
              style={
                selected
                  ? { background: '#ebebeb', fontWeight: 600 }
                  : undefined
              }
              key={name}
            >
              <span>{name}</span>
              <span style={selected ? { background: '#fff' } : undefined}>
                {totalResults}
              </span>
            </Filter>
          );
        })}
      </ul>
    </Box>
  );
}
