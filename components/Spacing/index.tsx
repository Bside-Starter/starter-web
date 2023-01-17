import styled from "styled-components";

interface SpacingProps {
  space: number;
}

const Spacing = ({ space = 0 }: SpacingProps) => {
  return <Space space={space} />;
};

const Space = styled.div<{ space: number }>`
  width: 100%;
  height: ${({ space }) => space / 10}rem;
`;

export default Spacing;
