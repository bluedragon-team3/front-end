import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {CrewDetailCheck} from "../../../components/CrewDetailCheck";
import { BackArrow } from "../../../components/backArrow/BackArrow";

export const Apply = () => {
    const navigate = useNavigate();
    return (

    <>
        <Header>
            <BackArrow />
            <Title>소모임 참여하기</Title>
        </Header>
        
        <ContentWrapper>
        <CrewDetailCheck
            title="소모임 제목"
            isReviewed={true}
            />
        </ContentWrapper>

            <ButtonGroup>
                <Button onClick={() => navigate("/study-end")}>신청하기</Button>
            </ButtonGroup>
    </>

      
    );
  };

  const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
  //width: 300px;
`;
const Button = styled.button`
  flex: 1;
  //width: 50px;
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
const Header = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  padding: 20px 0;
`;
const Title = styled.p`
  margin: 0;
  width: 100%;

  font-size: 32px;
`;

const ContentWrapper = styled.div`
  margin-top: 20px; /* Header와 CrewDetailCheck 사이의 간격 추가 */
`;