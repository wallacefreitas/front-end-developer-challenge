import styled from "styled-components";

interface TalentTreeImageProps {
  src: string;
  alt: string;
  borderColor: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TalentImageWrapper = styled.img<{
  borderColor: string;
}>`
  width: 64px;
  height: 64px;
  padding: 4px;
  background-color: #313031;
  border: 2px solid ${(props) => props.borderColor};
  position: relative;
  filter: brightness(100%);
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

  &:focus ${TalentImageWrapper} {
    outline: none;
    filter: brightness(100%);
  }
`;

export const TalentTreeImage = ({
  src,
  alt,
  borderColor,
  handleClick,
}: TalentTreeImageProps) => {
  return (
    <TalentTreeImageButton onMouseDown={handleClick}>
      <TalentImageWrapper src={src} alt={alt} borderColor={borderColor} />
    </TalentTreeImageButton>
  );
};
