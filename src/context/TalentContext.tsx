import { createContext, ReactNode, useState } from "react";
import { useTalentPoints } from "../hooks/useTalentPoints/useTalentPoints";

type TalentProviderProps = {
  children: ReactNode;
};

type TalentContextProps = {
  points: number;
  toastMessage: string;
  increasePoints: () => void;
  decreasePoints: () => void;
  setToastMessage: (message: string) => void;
};

export const TalentContext = createContext({} as TalentContextProps);

export const TalentProvider = ({ children }: TalentProviderProps) => {
  const { points, increasePoints, decreasePoints } = useTalentPoints();
  const [toastMessage, setToastMessage] = useState("");

  return (
    <TalentContext.Provider
      value={{
        points,
        toastMessage,
        setToastMessage,
        increasePoints,
        decreasePoints,
      }}
    >
      {children}
    </TalentContext.Provider>
  );
};
