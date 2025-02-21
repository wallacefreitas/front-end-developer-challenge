import styled from "styled-components";

interface BoardBodyProps {
  children: React.ReactNode;
  flexGrow?: string;
}

const BoardBodyWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-grow: 4;
  border: 2px solid yellow;
  margin: 10px;
  padding: 5px;
`;

export const BoardBody = ({ children }: BoardBodyProps) => {
  return <BoardBodyWrapper>{children}</BoardBodyWrapper>;
};
