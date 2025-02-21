import styled from "styled-components";

const BoardHeaderWrapper = styled.header`
  border: 2px solid blue;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f172a;
  width: 100%;
  font-size: 32px;
`;

export const BoardHeader = () => {
  return (
    <BoardHeaderWrapper>TITANSTAR LEGENDS RUNE MASTERY</BoardHeaderWrapper>
  );
};
