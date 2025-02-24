import styled from "styled-components";

interface BoardRootProps {
  children: React.ReactNode;
}

const BoardRootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const BoardRoot = ({ children }: BoardRootProps) => {
  return <BoardRootWrapper>{children}</BoardRootWrapper>;
};
