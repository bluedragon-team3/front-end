import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const CrewListItem = ({ title, category, content, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>
      <Content>카테고리: {category}</Content>
      <Content>한 줄 설명: {content}</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px 0 10px 15px;

  border-radius: 20px;
  background-color: #c5f8ff;

  cursor: pointer;
`;
const Title = styled.div`
  margin-bottom: 2px;

  font-size: 20px;
  font-weight: 600;
`;
const Content = styled.div`
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
