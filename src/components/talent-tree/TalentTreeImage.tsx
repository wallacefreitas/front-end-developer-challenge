import styled from "styled-components";

interface TalentTreeImageProps {
  src: string;
  alt: string;
  borderColor: string;
  brightness: number;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TalentTreeImageWrapper = styled.img<{
  borderColor: string;
  brightness: number;
}>`
  width: 64px;
  height: 64px;
  padding: 4px;
  background-color: #313031;
  border: 2px solid ${(props) => props.borderColor};
  position: relative;
  filter: brightness(${(props) => props.brightness}%);
  transition: filter 0.3s;

  &:hover {
    filter: brightness(100%);
  }
`;

const TalentTreeImageButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:focus ${TalentTreeImageWrapper} {
    outline: none;
    filter: brightness(100%);
  }
`;

export const TalentTreeImage = ({
  src,
  alt,
  borderColor,
  brightness,
  handleClick,
}: TalentTreeImageProps) => {
  return (
    <TalentTreeImageButton onMouseDown={handleClick}>
      <TalentTreeImageWrapper
        src={src}
        alt={alt}
        borderColor={borderColor}
        brightness={brightness}
      />
    </TalentTreeImageButton>
  );
};
