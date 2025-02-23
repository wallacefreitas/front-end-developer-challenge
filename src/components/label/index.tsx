import { HTMLAttributes } from "react";
import styled from "styled-components";

interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  responsive?: boolean;
}

const LabelWrapper = styled.h1<{ responsive?: boolean }>`
  display: flex;
  flex: 1;
  text-transform: uppercase;
  justify-content: end;
  width: 200px;
  max-width: 200px;

  ${(props) =>
    props.responsive &&
    `
      @media (max-width: 1024px) {
        display: none;
      }
    `}
`;

export const Label = ({ text, responsive, ...rest }: LabelProps) => {
  return (
    <LabelWrapper responsive={responsive} {...rest}>
      {text}
    </LabelWrapper>
  );
};
