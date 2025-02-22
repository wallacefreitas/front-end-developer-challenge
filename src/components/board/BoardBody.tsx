import styled from "styled-components";

interface BoardBodyProps {
  children: React.ReactNode;
  flexGrow?: string;
}

const BoardBodyWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 2px solid yellow;
  margin: 10px;
  padding: 5px;
  gap: 2rem;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    gap: 1rem;
    flex-direction: column;
  }
`;

export const BoardBody = ({ children }: BoardBodyProps) => {
  return <BoardBodyWrapper>{children}</BoardBodyWrapper>;
};
