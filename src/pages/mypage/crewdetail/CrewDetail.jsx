import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {CrewDetailCheck} from "../../../components/CrewDetailCheck"; // CrewDetailCheck 을 import


export const CrewDetail = () => {
    const navigate = useNavigate();
    return (

    <>
        <CrewDetailCheck
            title="소모임 제목"

            />
            <ButtonGroup>
                <Button onClick={() => navigate("/study-end")}>스터디 종료</Button>
                <Button onClick={() => navigate("/members")}>스터디원</Button>
            </ButtonGroup>
    </>

      
    );
    
  };

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