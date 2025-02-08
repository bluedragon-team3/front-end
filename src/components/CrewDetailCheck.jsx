import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const CrewDetailCheck = ({ title, isReviewed, category, memberLimit, startdate,finishdate, description, curriculum,review }) => {
    return (
      <Container>
        <Card>
          <Title>{title}</Title>
  
          <Label>
            카테고리 <CategoryButton>{category || "Category"}</CategoryButton>
          </Label>
  
          <Label>인원 수 제한</Label>
          <ReadOnlyBox>{memberLimit}</ReadOnlyBox>
  
          <Label>소모임 기간</Label>
          <ReadOnlyDate>{startdate}</ReadOnlyDate>
          <ReadOnlyDate>{finishdate}</ReadOnlyDate>
  
          <Label>소모임 한줄 설명</Label>
          <ReadOnlyBox>{description}</ReadOnlyBox>
  
          <Label>커리큘럼</Label>
          <ReadOnlyBox>{curriculum}</ReadOnlyBox>
  
          {isReviewed && <Label>
            회고록
            <ReadOnlyBox>{review}</ReadOnlyBox>
            </Label>}

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
  height: 70%;
  background-color:rgb(255, 255, 255);
`;

const Card = styled.div`
  width: 300px;
  //height: 700px;
  align-items: center;
  padding: 20px;
  background-color: #c7f4ff;
  border-radius: 15px;
  margin: 0 100px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color:rgb(0, 0, 0);
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: bold;
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

const ReadOnlyDate = styled.div` //서버에서 가져온 데이터 표시하는 박스
  width: 40%;
  padding: 0 5px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f3f3f3;
  color: #333;
  min-height: 30px; /* 최소 높이 설정 */
  line-height: 1.5;
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
