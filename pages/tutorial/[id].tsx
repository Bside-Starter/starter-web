import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "~/components/Button";
import Typo from "~/components/Typo";
import routes from "~/constants/routes";
import { useInterface } from "~/utils/interface";
import { ParsedStorage } from "~/utils/storage";

const TutorialPage = () => {
  const router = useRouter();
  const { pushNavigation, replaceNavigation } = useInterface();
  const id = parseInt(router.query.id as string, 10);

  const isLast = id === tutorialList.length;

  const matchedItem = tutorialList.find((v) => v.id === id);
  const handleNext = () => {
    if (isLast) {
      ParsedStorage.setItem("isTutorialViewed", true);
      replaceNavigation(routes.SIGN_IN);
    } else {
      pushNavigation(`${routes.TUTORIAL}/${id + 1}`);
    }
  };

  const handleSkip = () => {};
  return (
    <Container>
      <Typo>배포 테스트 중</Typo>
      <div>
        <Title>{matchedItem?.title}</Title>
        <Desc>{matchedItem?.desc}</Desc>
      </div>
      <ButtonWrap>
        {isLast ? (
          <>
            <Button
              title={"회원가입 또는 로그인"}
              buttonType={"outline"}
              hasNextButton
              onClick={handleNext}
            />
          </>
        ) : (
          <>
            <Button title={"다음"} hasNextButton onClick={handleNext} />
            <Button
              title={"우선 둘러보기"}
              buttonType={"outline"}
              hasNextButton
              onClick={handleSkip}
            />
          </>
        )}
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14rem 2rem 4.2rem;
  height: 100%;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typo.H2_B_PC};
`;

const Desc = styled.span`
  margin-top: 5.6rem;
  display: inline-block;
  ${({ theme }) => theme.typo.B1_R_PC}
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
`;

export default TutorialPage;

const tutorialList = [
  {
    id: 1,
    title: (
      <>
        {"소근소근에 오신 걸"}
        <br />
        {"환영해요."}
      </>
    ),
    desc: (
      <>
        {"이곳은"}
        <br />
        {"누구도 방해하지 않고,"}
        <br />
        {"오직 나만을 위해 존재하는"}
        <br />
        {"나의 은하에요."}
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        {"나의"}
        <br />
        {"솔직한 생각과 감정을"}
        <br />
        {"기록해 보세요."}
      </>
    ),
    desc: (
      <>
        {"아무도 함부로"}
        <br />
        {"나의 기록을 볼 수 없어요."}
      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
        {"그리고, "}
        <br />
        {"소중한 사람들에게만"}
        <br />
        {"보여주세요."}
      </>
    ),
    desc: (
      <>
        {"내가 믿고 의지하는"}
        <br />
        {"정말 소중한 사람들에게만"}
        <br />
        {"기록을 보여줄 수 있어요."}
      </>
    ),
  },
  {
    id: 4,
    title: (
      <>
        {"이제"}
        <br />
        {"나만의 이야기로"}
        <br />
        {"나만의 은하를"}
        <br />
        {"채워나가 볼까요?"}
      </>
    ),
    desc: <></>,
  },
];
