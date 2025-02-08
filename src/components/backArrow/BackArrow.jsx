import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate(-1);
      }}
    >
      <img src="/assets/backArrow.svg" />
    </Button>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: 0;

  cursor: pointer;
`;
