import styled from "styled-components";

interface ScoreCardRootProps {
  children: React.ReactNode;
}

const ScoreCardRootWrapper = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  border: 2px solid orange;
`;

export const ScoreCardRoot = ({ children }: ScoreCardRootProps) => {
  return <ScoreCardRootWrapper active={true}>{children}</ScoreCardRootWrapper>;
};
