import styled from "styled-components";

interface PathGroupRootProps {
  children: React.ReactNode;
}

const PathGroupRootWrapper = styled.article`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export function PathGroupRoot({ children }: PathGroupRootProps) {
  return <PathGroupRootWrapper>{children}</PathGroupRootWrapper>;
}
