import styled from "styled-components";

interface MainProps {
  children: React.ReactNode;
}

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Main = ({ children }: MainProps) => {
  return <MainWrapper data-testid="main">{children}</MainWrapper>;
};
