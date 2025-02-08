import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const ToHomeButton = () => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate("/home");
      }}
    >
      yo!
      <br />
      <Crew>크루</Crew> 트
    </Container>
  );
};

const Container = styled.button`
  width: 90px;
  height: 60px;

  border: 0;
  border-radius: 20px;
  background-color: #1a3f47;

  font-size: 18px;
  color: #00d0ff;

  cursor: pointer;
`;

const Crew = styled.span`
  color: white;
`;
