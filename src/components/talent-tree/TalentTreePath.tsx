import styled from "styled-components";

interface TalentTreePathProps {
  children: React.ReactNode;
}

const TalentTreePathWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid orange;
  flex: 1;
  gap: 2rem;
`;

export const TalentTreePath = ({ children }: TalentTreePathProps) => {
  return <TalentTreePathWrapper>{children}</TalentTreePathWrapper>;
};
