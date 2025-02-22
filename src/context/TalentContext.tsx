import { createContext, ReactNode } from "react";
import { useTalentPoints } from "../hooks/useTalentPoints/useTalentPoints";

type TalentProviderProps = {
  children: ReactNode;
};

type TalentContextProps = {
  points: number;
  increasePoints: () => void;
  decreasePoints: () => void;
};

export const TalentContext = createContext({} as TalentContextProps);

export const TalentProvider = ({ children }: TalentProviderProps) => {
  const { points, increasePoints, decreasePoints } = useTalentPoints();

  return (
    <TalentContext.Provider
      value={{
        points,
        increasePoints,
        decreasePoints,
      }}
    >
      {children}
    </TalentContext.Provider>
  );
};
