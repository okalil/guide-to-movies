import React from 'react';

import { useSearch } from '../../contexts/SearchContext';
import filterByYear from '../../utils/filterByYear';

import Box from '../Box';
import { Filter } from './styles';

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

  const focusStyle = { background: '#f6f6f6', fontWeight: 600 };

  return (
    <Box>
      <span>Resultados da Busca</span>
      <ul>
        {filters.map(({ name, totalResults, type }) => (
          <Filter
            onClick={() => setFilter(currentFilter === type ? 'all' : type)}
            style={currentFilter === type ? focusStyle : undefined}
            key={name}
          >
            <span>{name}</span>
            <span>{totalResults}</span>
          </Filter>
        ))}
      </ul>
    </Box>
  );
}
