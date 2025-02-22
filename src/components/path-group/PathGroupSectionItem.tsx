import styled from "styled-components";

interface PathGroupSectionProps {
  children: React.ReactNode;
}

const PathGroupSectionItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export function PathGroupSectionItem({ children }: PathGroupSectionProps) {
  return <PathGroupSectionItemWrapper>{children}</PathGroupSectionItemWrapper>;
}
