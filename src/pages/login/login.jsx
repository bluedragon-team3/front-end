
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;
  text-align: center;
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

export const login = () => {

  return (
    <Container>
      <Title>로그인</Title>
      <Label>아이디</Label>
      <Input type="text" />

      <Label>비밀번호</Label>
      <Input type="password" />

      <Button>로그인</Button>
    </Container>
  );
};

