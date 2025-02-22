import { HTMLAttributes } from "react";
import styled from "styled-components";

interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  responsive?: boolean;
}

const LabelWrapper = styled.h1<{ responsive?: boolean }>`
  display: inline-block;

  ${(props) =>
    props.responsive &&
    `
      @media (max-width: 880px) {
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
