import { createContext, useContext, useState } from 'react';

export const SearchContext = createContext({});

export function SearchContextProvider({ children }) {
  const [search, setSearch] = useState({ keyword: '', data: null });

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  return context;
}
