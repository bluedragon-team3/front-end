import styled from "styled-components";
import { BackArrow } from "../../components/backArrow/BackArrow";
import CrewBlock from "../../components/crewBlock/CrewBlock";

const info = { id: "iddd", name: "정보운", studentId: "20222222" };
const crewList = [
  { title: "멋진 알고리즘 스터디", category: "컴공" },
  { title: "농구 스터디", category: "체육" },
  { title: "ㅇㅇㅇㅇ", category: "컴퓨터공학과쪽임" },
  { title: "스터디", category: "컴공컴공컴공" },
  { title: "멋진 알고리즘 스터디", category: "컴공" },
  { title: "농구 스터디", category: "체육" },
  { title: "ㅇㅇㅇㅇ", category: "컴퓨터공학과쪽임" },
  { title: "스터디", category: "컴공컴공컴공" },
  { title: "멋진 알고리즘 스터디", category: "컴공" },
  { title: "농구 스터디", category: "체육" },
  { title: "ㅇㅇㅇㅇ", category: "컴퓨터공학과쪽임" },
  { title: "스터디", category: "컴공컴공컴공" },
];

export const MyPage = () => {
  return (
    <Container>
      <Header>
        <BackArrow />
        <Title>마이페이지</Title>
      </Header>

      <Infos>
        <InfoText>id: {info.id}</InfoText>
        <InfoText>이름: {info.name}</InfoText>
        <InfoText>학번: {info.studentId}</InfoText>
      </Infos>

      <TitleBlock>내가 관리 중인 소모임</TitleBlock>
      <CrewContainer>
        {crewList.map((each) => (
          <CrewBlock title={each.title} category={each.category} />
        ))}
      </CrewContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 40px;

  padding: 30px;
`;

const Header = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
`;

const Title = styled.p`
  margin: 0;
  width: 100%;

  font-size: 32px;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
const InfoText = styled.p`
  position: relative;

  margin: 0;
`;

const TitleBlock = styled.span`
  padding: 20px 0;
  width: 100%;

  border-radius: 10px;
  background-color: #e7fcff;

  text-align: center;
  word-break: keep-all;
`;
const CrewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  max-height: 500px;
  overflow-y: auto;
`;
