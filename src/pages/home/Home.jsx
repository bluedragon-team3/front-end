import styled from "styled-components";
import MyPageButton from "../../components/mypage/MyPageButton";
import CrewBlock from "../../components/mypage/crewBlock/CrewBlock";

const crewList = [
  { title: "멋진 알고리즘 스터디", category: "컴공" },
  { title: "농구 스터디", category: "체육" },
  { title: "ㅇㅇㅇㅇ", category: "컴퓨터공학과쪽임" },
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
      <div>
        {crewList.map((each) => (
          <CrewBlock title={each.title} category={each.category} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  padding: 1rem;
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
