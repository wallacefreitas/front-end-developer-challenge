import styled from "styled-components";

interface BoardRootProps {
  children: React.ReactNode;
}

const BoardRootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 2px solid red;
`;

export const BoardRoot = ({ children }: BoardRootProps) => {
  return <BoardRootWrapper>{children}</BoardRootWrapper>;
};
