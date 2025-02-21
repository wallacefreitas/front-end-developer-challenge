import styled from "styled-components";

interface MainProps {
  children: React.ReactNode;
}

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 2px solid orange;
`;

export const Main = ({ children }: MainProps) => {
  return <MainWrapper>{children}</MainWrapper>;
};
