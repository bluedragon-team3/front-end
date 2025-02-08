import React from "react";
import styled from "styled-components";

export const MemberItem = ({ id, name, gender, studentId }) => {
  return (
    <Container>
      <div>
        <Title>{id}</Title>
        <Content>{name}</Content>
      </div>
      <Content>{gender}</Content>
      <Content>{studentId}</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  border-radius: 15px;
  background-color: #e1fbff;
`;

const Title = styled.div`
  margin-bottom: 2px;

  font-size: 20px;
  font-weight: 600;
`;
const Content = styled.div`
  font-size: 15px;
`;
