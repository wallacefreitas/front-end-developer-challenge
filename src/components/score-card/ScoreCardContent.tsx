import styled from "styled-components";

interface ScoreCardContentProps {
  children: React.ReactNode;
}

const ScoreCardContentWrapper = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: #0f172a;
  text-align: center;
  font-size: 25px;
  padding: 0 1rem;

  @media (max-width: 768px) {
    border-radius: 0;
    width: 100%;
  }

  @media (max-width: 1024px) {
    flex: 1;
  }
`;

export const ScoreCardContent = ({ children }: ScoreCardContentProps) => {
  return (
    <ScoreCardContentWrapper active={true}>{children}</ScoreCardContentWrapper>
  );
};
