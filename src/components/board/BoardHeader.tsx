import styled from "styled-components";

const BoardHeaderWrapper = styled.header`
  border: 2px solid blue;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #0f172a;
  width: 100%;
`;

export const BoardHeader = () => {
  return (
    <BoardHeaderWrapper>
      <h1>TITANSTAR LEGENDS RUNE MASTERY</h1>
    </BoardHeaderWrapper>
  );
};
