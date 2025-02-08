import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CrewForm } from "../../components/CrewForm";
import { ToHomeButton } from "../../components/toHomeButton/ToHomeButton";

export const Create = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <ToHomeButton />
      </Header>
      <Title>소모임 생성</Title>

      <CrewForm
        title="소모임 제목"
        button1Text="생성하기"
        //button1Action={() => navigate("")}
      />
    </>
  );
};

const Header = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  padding: 20px 0;
`;

const Title = styled.p`
  margin: 0;
  width: 100%;
  text-align: center;
  font-size: 32px;
`;
