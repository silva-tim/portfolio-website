import { createContext, useContext, useState } from "react";
import { links } from "../data";

type SectionName = (typeof links)[number]["name"];

type props = {
  children: React.ReactNode;
};

type ActiveContextType = {
  active: SectionName;
  setActive: React.Dispatch<React.SetStateAction<SectionName>>;
};

const ActiveContext = createContext<ActiveContextType | null>(null);

export default function ActiveContextProvider({ children }: props) {
  const [active, setActive] = useState<SectionName>("Home");

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
}

export function useActiveContext() {
  const context = useContext(ActiveContext);

  if (context === null) {
    throw new Error("useActiveContext must be used within provider");
  }

  return context;
}
