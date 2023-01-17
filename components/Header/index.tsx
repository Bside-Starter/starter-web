import { ReactNode } from "react";
import styled from "styled-components";
import { useInterface } from "~/utils/interface";
import Icon, { ArrowRight } from "../Icon";

interface HeaderProps {
  title: string;
  right?: ReactNode;
  onBackClick?: () => void;
  backButtonShown?: boolean;
}

const Header = ({
  title,
  right,
  onBackClick,
  backButtonShown = true,
}: HeaderProps) => {
  const { popNavigation } = useInterface();
  const handleBackClick = () => {
    popNavigation();
  };
  return (
    <Container>
      <TitleWrap>
        {backButtonShown && (
          <button onClick={onBackClick || handleBackClick}>
            <Icon icon={ArrowRight} color={"WHITE"} />
          </button>
        )}
        <Title>{title}</Title>
      </TitleWrap>
      {right}
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
`;

const TitleWrap = styled.div`
  display: flex;
`;

const Title = styled.h4`
  margin-left: 0.8rem;
  ${({ theme }) => theme.typo.B2_SB}
`;

export default Header;
