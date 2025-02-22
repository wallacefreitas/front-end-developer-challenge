import styled from "styled-components";

interface PathGroupSectionProps {
  children: React.ReactNode;
}

const PathGroupSectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export function PathGroupSection({ children }: PathGroupSectionProps) {
  return <PathGroupSectionWrapper>{children}</PathGroupSectionWrapper>;
}
