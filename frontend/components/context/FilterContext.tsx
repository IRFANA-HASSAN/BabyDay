"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextType {
  isFilterOpen: boolean;
  openFilters: () => void;
  closeFilters: () => void;
  showFilterButton: boolean;
  setShowFilterButton: (show: boolean) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showFilterButton, setShowFilterButton] = useState(false);

  const openFilters = () => setIsFilterOpen(true);
  const closeFilters = () => setIsFilterOpen(false);

  return (
    <FilterContext.Provider
      value={{
        isFilterOpen,
        openFilters,
        closeFilters,
        showFilterButton,
        setShowFilterButton,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    // Return default values instead of throwing error
    return {
      isFilterOpen: false,
      openFilters: () => {},
      closeFilters: () => {},
      showFilterButton: false,
      setShowFilterButton: () => {},
    };
  }
  return context;
}

// Default export for convenience
export default FilterProvider;








// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";

// interface FilterContextType {
//   isFilterOpen: boolean;
//   openFilters: () => void;
//   closeFilters: () => void;
//   showFilterButton: boolean;
//   setShowFilterButton: (show: boolean) => void;
// }

// const FilterContext = createContext<FilterContextType | undefined>(undefined);

// export function FilterProvider({ children }: { children: ReactNode }) {
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [showFilterButton, setShowFilterButton] = useState(false);

//   const openFilters = () => setIsFilterOpen(true);
//   const closeFilters = () => setIsFilterOpen(false);

//   return (
//     <FilterContext.Provider
//       value={{
//         isFilterOpen,
//         openFilters,
//         closeFilters,
//         showFilterButton,
//         setShowFilterButton,
//       }}
//     >
//       {children}
//     </FilterContext.Provider>
//   );
// }

// export function useFilter() {
//   const context = useContext(FilterContext);
//   if (context === undefined) {
//     // Return default values instead of throwing error
//     return {
//       isFilterOpen: false,
//       openFilters: () => {},
//       closeFilters: () => {},
//       showFilterButton: false,
//       setShowFilterButton: () => {},
//     };
//   }
//   return context;
// }