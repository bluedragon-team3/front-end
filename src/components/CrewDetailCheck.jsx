import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const CrewDetailCheck = ({ title, button1Text, button1Action, button2Text, button2Action }) => {
  const [category, setCategory] = useState("");
  return (
    <Container>
      <Card>
        <Title>{title}</Title>

        <Label>
            카테고리 <CategoryButton>Category</CategoryButton>
        </Label>


        <Label>인원 수 제한</Label>
        <ReadOnlyBox> </ReadOnlyBox>

        <Label>소모임 기간</Label>
        <ReadOnlyBox> </ReadOnlyBox>
        <ReadOnlyBox> </ReadOnlyBox>


        <Label>소모임 한줄 설명</Label>
        <ReadOnlyBox> </ReadOnlyBox>

        <Label>커리큘럼</Label>
        <ReadOnlyBox> </ReadOnlyBox>
      </Card>

      
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
const CategoryButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 10px;
  background-color: #5d4b82;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px; /* 카테고리 텍스트와 버튼 사이 간격 조절 */

  &:hover {
    background-color: #4a3a69;
  }
`;

const ReadOnlyBox = styled.div` //서버에서 가져온 데이터 표시하는 박스
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f3f3f3;
  color: #333;
  min-height: 40px; /* 최소 높이 설정 */
  line-height: 1.5;
  white-space: pre-wrap; /* 줄바꿈 허용 */
`;
