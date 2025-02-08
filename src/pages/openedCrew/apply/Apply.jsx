import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {CrewDetailCheck} from "../../../components/CrewDetailCheck";


export const Apply = () => {
    const navigate = useNavigate();
    return (
      <CrewDetailCheck
 
        title="소모임 참여하기"
        button1Text="신청하기"
        //button1Action={() => navigate("signup")}
      />
    );
  };