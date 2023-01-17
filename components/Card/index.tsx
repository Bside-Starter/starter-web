import { PropsWithChildren } from "react";
import styled, { CSSObject } from "styled-components";

interface CardProps {
  onClick?: () => void;
  style?: CSSObject;
}

const Card = ({ children, onClick, style }: PropsWithChildren<CardProps>) => {
  return (
    <Container onClick={onClick} style={style}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid white;
  backdrop-filter: blur(28px);
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.2);
  /* background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    ); */
  /* background-color: transparent; */
  /* background-origin: border-box; */
  /* background-clip: content-box, border-box; */
`;

export default Card;
