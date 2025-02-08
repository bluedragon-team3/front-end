import React from "react";
import { BackArrow } from "../../../../components/backArrow/BackArrow";
import styled from "styled-components";
import { MemberItem } from "./components/memberItem";

const members = [
  { id: "bowoon", name: "정보운", gender: "여", studentId: "20222222" },
  { id: "bowoon", name: "정보운", gender: "여", studentId: "20222222" },
  { id: "bowoon", name: "정보운", gender: "여", studentId: "20222222" },
  { id: "bowoon", name: "정보운", gender: "여", studentId: "20222222" },
  { id: "bowoon", name: "정보운", gender: "여", studentId: "20222222" },
];

export const Member = () => {
  return (
    <Container>
      <Header>
        <BackArrow />
      </Header>
      <Title>소모임 인원</Title>
      {members.map((each) => (
        <MemberItem
          key={each.id}
          id={each.id}
          name={each.name}
          gender={each.gender}
          studentId={each.studentId}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 20px;

  padding: 40px;
`;
const Header = styled.div``;

const Title = styled.div`
  padding: 20px;

  border-radius: 15px;
  background-color: #1a3f47;

  color: #e1fbff;
  font-size: 32px;

  text-align: center;
`;
