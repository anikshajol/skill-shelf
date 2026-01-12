import React, { useContext } from "react";
import { SearchContext } from "../Context/Context";

const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Context must used a provider");
  }
  return context;
};

export default useSearch;
