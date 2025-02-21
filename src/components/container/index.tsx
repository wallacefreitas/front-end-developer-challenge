import { HTMLAttributes } from "react";
import styled from "styled-components";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ContainerWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  min-height: 100vh;
  padding: 3rem;
  border: 2px solid red;
`;

export const Container = ({ children, ...rest }: ContainerProps) => {
  return <ContainerWrapper {...rest}>{children}</ContainerWrapper>;
};
