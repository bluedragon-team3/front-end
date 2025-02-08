import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 100vh;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;
  text-align: center;
  margin: 0 auto;

`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  margin: 10px 0 5px;
  font-weight: bold;
  color: #2c3e50;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 15px;
  border: none;
  background: #ccf5ff;
  margin-bottom: 10px;
`;

const GenderContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  margin-bottom: 10px;
`;

const GenderButton = styled.button`
  padding: 8px 15px;
  border-radius: 15px;
  border: none;
  background: ${({ selected }) => (selected ? "#ccf5ff" : "#f5f5f5")};
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  border: none;
  background: #2c3e50;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const Signup = () => {
  const [gender, setGender] = useState("");

  return (
    <Container>
      <Title>회원가입</Title>
      <Label>이름</Label>
      <Input type="text" />
      
      <Label>나이</Label>
      <Input type="number" />

      <Label>성별</Label>
      <GenderContainer>
        <GenderButton selected={gender === "여"} onClick={() => setGender("여")}>여</GenderButton>
        <GenderButton selected={gender === "남"} onClick={() => setGender("남")}>남</GenderButton>
      </GenderContainer>

      <Label>아이디</Label>
      <Input type="text" />

      <Label>비밀번호</Label>
      <Input type="password" />

      <Label>이메일</Label>
      <Input type="email" />

      <Button>회원가입</Button>
    </Container>
  );
};