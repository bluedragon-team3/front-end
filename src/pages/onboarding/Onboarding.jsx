import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>
        yo! <Crew>크루</Crew>트
      </Title>
      <Button
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </Button>
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;

  padding: 0 4rem;
  height: inherit;
  background-color: #e1fbff;
`;

const Title = styled.p`
  margin: 0;
  font-size: 64px;
  color: #00d0ff;
  word-break: keep-all;
`;

const Crew = styled.span`
  color: #1a3f47;
`;

const Button = styled.button`
  padding: 1.5rem 0;
  width: 100%;

  background-color: #feffff;
  border: 0;
  border-radius: 20px;

  color: #48656c;
  font-size: 20px;
`;
