import styled from "styled-components";
import MyPageButton from "../../components/mypage/MyPageButton";

export const Home = () => {
  return (
    <Container>
      <Header>
        <Title>
          yo! <Crew>크루</Crew>트
        </Title>
        <MyPageButton />
      </Header>
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
