import React, { useEffect, useState } from "react";
import { BackArrow } from "../../../../components/backArrow/BackArrow";
import styled from "styled-components";
import { MemberItem } from "./components/memberItem";
import axios from "axios";
import { baseURL } from "../../../../constants/constants";

export const Member = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://${baseURL}/mypage/${localStorage.getItem("groupId")}/studyMate/`
      )
      .then((res) => {
        setMembers(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <Container>
      <Header>
        <BackArrow />
      </Header>
      <Title>소모임 인원</Title>
      {members.map((each) => (
        <MemberItem
          key={each.id}
          id={each.signId}
          name={each.name}
          gender={each.sex === "FEMALE" ? "여" : "남"}
          studentId={each.studentNumber}
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
