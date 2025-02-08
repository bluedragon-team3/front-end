import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {CrewForm} from "../../components/CrewForm"; 


export const Create = () => {
    const navigate = useNavigate();
    return (
      <CrewForm
 
        title="소모임 제목"
        button1Text="생성하기"
        //button1Action={() => navigate("")}
      />
    );
  };