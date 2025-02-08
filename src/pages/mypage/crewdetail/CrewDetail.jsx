import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

const Card = styled.div`
  width: 350px;
  padding: 20px;
  background-color: #c7f4ff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #6a6a6a;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 10px;
  background-color: #173f41;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #145055;
  }
`;

const CategoryButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 10px;
  background-color: #5d4b82;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #4a3a69;
  }
`;
export const CrewDetail = () => {
  return (
    <Container>
      <Card>
        <Title>소모임 제목</Title>

        <Label>카테고리</Label>
        <CategoryButton>Category</CategoryButton>

        <Label>인원 수 제한</Label>
        <Input type="number" />

        <Label>소모임 기간</Label>
        <Input type="text" placeholder="소모임 시작" />
        <Input type="text" placeholder="소모임 종료" />

        <Label>소모임 한줄 설명</Label>
        <Input type="text" />

        <Label>커리큘럼</Label>
        <Input type="text" />

        <ButtonGroup>
          <Button>스터디 종료</Button>
          <Button>스터디원</Button>
        </ButtonGroup>
      </Card>
    </Container>
  );
};




//export default CrewDetail;
