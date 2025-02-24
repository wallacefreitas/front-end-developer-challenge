import styled from "styled-components";

interface TalentTreePathProps {
  children: React.ReactNode;
}

const TalentTreePathWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 2rem;
`;

export const TalentTreePath = ({ children }: TalentTreePathProps) => {
  return <TalentTreePathWrapper>{children}</TalentTreePathWrapper>;
};
