import styled from "styled-components";

interface TalentTreeRootProps {
  children: React.ReactNode;
}

const TalentTreeRootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid red;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const TalentTreeRoot = ({ children }: TalentTreeRootProps) => {
  return <TalentTreeRootWrapper>{children}</TalentTreeRootWrapper>;
};
