import { createContext, useContext, useEffect, useState } from 'react';

export const SearchContext = createContext({});

export function SearchContextProvider({ children }) {
  const [search, setSearch] = useState({ keyword: '', data: null });
  const [history, setHistory] = useState([]);

  const { data } = search;

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('movies-results-history'));

    if (history) setHistory(history);
  }, []);

  useEffect(() => {
    if (data && data.results[0]) {
      const newHistory = [...history, data];
      setHistory(newHistory);
      localStorage.setItem(
        'movies-results-history',
        JSON.stringify(newHistory)
      );
    }
    return;
  }, [data]);

  return (
    <SearchContext.Provider value={{ history, search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  return context;
}
