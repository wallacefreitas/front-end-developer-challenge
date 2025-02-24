import styled from "styled-components";

interface ScoreCardRootProps {
  children: React.ReactNode;
}

const ScoreCardRootWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ScoreCardRoot = ({ children }: ScoreCardRootProps) => {
  return <ScoreCardRootWrapper>{children}</ScoreCardRootWrapper>;
};
