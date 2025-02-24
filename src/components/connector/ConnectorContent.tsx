import styled from "styled-components";
import { stripeAnimation } from "../../shared/utils/styles";

interface ConectorContentProps {
  backgroundColor: string;
  width: string;
}

const ConectorContentWrapper = styled.div<{
  width: string;
  backgroundColor: string;
}>`
  display: flex;
  height: 15px;
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.34) 25%,
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

export const ConectorContent = ({
  backgroundColor,
  width,
}: ConectorContentProps) => {
  return (
    <ConectorContentWrapper backgroundColor={backgroundColor} width={width} />
  );
};
