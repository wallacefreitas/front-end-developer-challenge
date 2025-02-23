import styled from "styled-components";

interface ScoreCardContentProps {
  children: React.ReactNode;
}

const ScoreCardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: #0f172a;
  text-align: center;
  font-size: 25px;
  padding: 0 1rem;
  gap: 0.3rem;

  @media (max-width: 768px) {
    border-radius: 0;
    width: 100%;
  }

  @media (max-width: 1024px) {
    flex: 1;
    gap: 0;
  }
`;

export const ScoreCardContent = ({ children }: ScoreCardContentProps) => {
  return <ScoreCardContentWrapper>{children}</ScoreCardContentWrapper>;
};
