"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ActiveSectionType = {
  active: string;
  setActive: (value: string) => void;
};

const ActiveSectionContext = createContext<ActiveSectionType>({
  active: "",
  setActive: () => {},
});

export const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState('home'); // Provide a default value

  return (
    <ActiveSectionContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

// Use the "use" prefix for custom hooks
export const useActiveSectionContext = () => useContext(ActiveSectionContext);



