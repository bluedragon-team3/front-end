import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const CrewForm = ({ title, button1Text, button1Action, button2Text, button2Action }) => {
  const [category, setCategory] = useState("");
  return (
    <Container>
      <Card>
        <Title>{title}</Title>

        <Label>
          카테고리 &ensp;
          <CategorySelect value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled>
              선택하세요
            </option>
            <option value="study">스터디</option>
            <option value="hobby">취미</option>
            <option value="exercise">운동</option>
            <option value="etc">기타</option>
          </CategorySelect>
        </Label>

        <Label>인원 수 제한</Label>
        <Input type="number" />

        <Label>소모임 기간</Label>
        <Input type="text" placeholder="소모임 시작" />
        <Input type="text" placeholder="소모임 종료" />

        <Label>소모임 한줄 설명</Label>
        <Input type="text" />

        <Label>커리큘럼</Label>
        <textarea name="postContent" defaultValue="" rows={4} cols={40} />
      </Card>

      <ButtonGroup>
        <Button onClick={button1Action}>{button1Text}</Button>
        <Button onClick={button2Action}>{button2Text}</Button>
      </ButtonGroup>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 4rem;
  height: inherit;
  background-color: #f8f8f8;
`;

const Card = styled.div`
  width: 300px;
  height: 70%;
  align-items: center;
  padding: 20px;
  background-color: #c7f4ff;
  border-radius: 15px;
  margin: 0 100px;
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
  width: 140px;
  height: 50px;
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

const CategorySelect = styled.select`
  padding: 8px;
  border: none;
  border-radius: 10px;
  background-color: #5d4b82;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #4a3a69;
  }
  option {
    background: white;
    color: black;
  }
`;
