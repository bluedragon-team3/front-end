import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CrewDetailCheck } from "../../../components/CrewDetailCheck";
import { BackArrow } from "../../../components/backArrow/BackArrow";

import axios from "axios";
import { baseURL } from "../../../constants/constants";

export const Apply = () => {
  const [crewDetails, setCrewDetails] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://${baseURL}/group/${localStorage.getItem("groupId")}/`, {
        params: {
          userId: localStorage.getItem("id"),
        },
      })
      .then((response) => {
        console.log(response.data);
        setCrewDetails(response.data); // Set the fetched crew details
      })
      .catch((error) => {
        console.error("Error fetching crew details:", error);
      });
  }, []);

  const handleSubmit = () => {
    const formData = new URLSearchParams();
    formData.append("userId", 16);
    axios
      .post(
        `http://${baseURL}/group/${localStorage.getItem("groupId")}/`,
        formData,
        { headers: { "Content-Type": "application/json" } } // 요청 헤더
      )
      .then((response) => {
        console.log(response.data);
        alert("신청에 성공하셨습니다");
      })
      .catch((error) => {
        console.error("Error fetching crew details:", error);
        alert("신청에 실패하셨습니다");
      });
    navigate("/home");
  };

  return (
    <>
      <Header>
        <BackArrow />
        <Title>소모임 참여하기</Title>
      </Header>

      <ContentWrapper>
        <CrewDetailCheck
          title={crewDetails?.name}
          isReviewed={crewDetails?.isEnded} // Assuming the "isReviewed" property is part of the response
          category={crewDetails?.category}
          memberLimit={crewDetails?.peopleLimit}
          startdate={crewDetails?.startDate}
          finishdate={crewDetails?.finishDate}
          description={crewDetails?.detail}
          curriculum={crewDetails?.curriculum}
        />
      </ContentWrapper>

      <ButtonGroup>
        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          신청하기
        </Button>
      </ButtonGroup>
    </>
  );
};

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
  //width: 300px;
`;
const Button = styled.button`
  flex: 1;
  //width: 50px;
  height: 50px;
  padding: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 10px;
  background-color: #173f41;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #145055;
  }
`;
const Header = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  padding: 20px 0;
`;
const Title = styled.p`
  margin: 0;
  width: 100%;

  font-size: 32px;
`;

const ContentWrapper = styled.div`
  margin-top: 20px; /* Header와 CrewDetailCheck 사이의 간격 추가 */
`;
