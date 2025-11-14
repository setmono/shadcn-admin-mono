import { useContext } from "react";

import { SearchContext } from "@/components/context/search-provider";

export function useSearch() {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error("useSearch has to be used within SearchProvider");
  }

  return searchContext;
}
