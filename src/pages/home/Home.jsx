import styled from "styled-components";
import MyPageButton from "../../components/mypage/MyPageButton";
import CrewBlock from "../../components/mypage/crewBlock/CrewBlock";
import LinkButton from "./components/linkButton";

const crewList = [
  { title: "멋진 알고리즘 스터디", category: "컴공" },
  { title: "농구 스터디", category: "체육" },
  { title: "ㅇㅇㅇㅇ", category: "컴퓨터공학과쪽임" },
  { title: "스터디", category: "컴공컴공컴공" },
];

export const Home = () => {
  return (
    <Container>
      <Header>
        <Title>
          yo! <Crew>크루</Crew>트
        </Title>
        <MyPageButton />
      </Header>
      <CrewsGrid>
        {crewList.map((each) => (
          <CrewBlock title={each.title} category={each.category} />
        ))}
      </CrewsGrid>
      <ButtonContainer>
        이동하기
        <Buttons>
          <LinkButton content={"기록열람"} />
          <LinkButton content={"소모임 참여하러 가기"} />
          <LinkButton content={"소모임 생성"} />
        </Buttons>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 90%;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  padding: 50px 10px 0;
`;

const Title = styled.p`
  margin: 0;
  font-size: 48px;
  color: #00d0ff;
  word-break: keep-all;
`;

const Crew = styled.span`
  color: #1a3f47;
`;
const CrewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 30px 15px;

  border: 2px #1a3f47 solid;
  border-radius: 20px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
`;
