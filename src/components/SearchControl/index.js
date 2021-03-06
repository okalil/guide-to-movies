import React, { useContext } from 'react';
import axios from 'axios';
import { SearchContext } from '../../contexts/SearchContext';

import { ControlWrapper, ControlInput } from './styles';

const baseURL = '/api/moviedb?url=';

export default function SearchControl() {
  const { setSearch } = useContext(SearchContext);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const keyword = formData.get('search');

    const [query] = keyword.split('y:');

    if (!query.trim()) return;

    try {
      const { data } = await axios.get(`/search/multi?query=${query}`, {
        baseURL,
      });

      setSearch({ keyword, data });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ControlWrapper onSubmit={handleSubmit}>
      <ControlInput name="search" />
    </ControlWrapper>
  );
}
