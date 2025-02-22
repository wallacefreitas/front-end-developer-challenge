import styled from "styled-components";
import { stripeAnimation } from "../../shared/utils/styles";

interface ConectorRootProps {
  children: React.ReactNode;
}

export const ConectorRootWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 15px;
  background-color: #9aa6b2;
  overflow: hidden;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 40px 40px;
  animation: ${stripeAnimation} 1s linear infinite;

  @media (max-width: 768px) {
    width: 20px;
    height: 35px;
  }
`;

export const ConectorRoot = ({ children }: ConectorRootProps) => {
  return <ConectorRootWrapper>{children}</ConectorRootWrapper>;
};
