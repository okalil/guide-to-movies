import { createContext, useContext, useEffect, useState } from 'react';

export const SearchContext = createContext({});

export function SearchContextProvider({ children }) {
  const [search, setSearch] = useState({ keyword: '', data: null });
  const [history, setHistory] = useState([]);

  const { data } = search;

  useEffect(() => {
    if (data && data.results[0]) setHistory([...history, data]);
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
