import styled from "styled-components";

interface TalentTreeGroupProps {
  children: React.ReactNode;
}

const TalentTreeGroupWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex: 1;
  padding: 0;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const TalentTreeGroup = ({ children }: TalentTreeGroupProps) => {
  return (
    <TalentTreeGroupWrapper role="group">{children}</TalentTreeGroupWrapper>
  );
};
