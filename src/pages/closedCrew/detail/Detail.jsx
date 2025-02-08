import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CrewDetailCheck } from "../../../components/CrewDetailCheck";
import { BackArrow } from "../../../components/backArrow/BackArrow";

import axios from "axios";
import { baseURL } from "../../../constants/constants";

export const Detail = () => {
  const [crewDetails, setCrewDetails] = useState();
  const [content, setContent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://${baseURL}/group/${localStorage.getItem("groupId")}/`, {
        params: {
          userId: localStorage.getItem("id"),
        },
      })
      .then((response) => {
        setCrewDetails(response.data); // Set the fetched crew details
      })
      .catch((error) => {
        console.error("Error fetching crew details:", error);
      });

    axios
      .get(`http://${baseURL}/review/${localStorage.getItem("groupId")}/`)
      .then((response) => {
        console.log(response.data);
        setContent(response.data);
      })
      .catch((error) => {
        alert("ERROR", error);
      });
  }, []);

  return (
    <>
      <Header>
        <BackArrow />
        <Title>기록 열람</Title>
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
          review={content.map((each) => {
            return each.content;
          })}
        />
      </ContentWrapper>
    </>
  );
};

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Button = styled.button`
  flex: 1;
  width: 140px;
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
