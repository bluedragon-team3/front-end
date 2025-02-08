import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export const CrewDetail = () => {
    const navigate = useNavigate();
    return (
      <CrewForm 
        title="소모임 제목"
        button1Text="스터디 종료"
        button1Action={() => navigate("signup")}
        button2Text="스터디원"
        button2Action={() => navigate("")}
      />
    );
  };