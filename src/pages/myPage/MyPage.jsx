import styled from "styled-components";
import { BackArrow } from "../../components/backArrow/BackArrow";

const info = { id: "iddd", name: "정보운", studentId: "20222222" };

export const MyPage = () => {
  return (
    <Container>
      <Header>
        <BackArrow />
        <Title>마이페이지</Title>
      </Header>

      <Description>id: {info.id}</Description>
      <Description>이름: {info.name}</Description>
      <Description>학번: {info.studentId}</Description>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Title = styled.p``;
const Description = styled.p``;
