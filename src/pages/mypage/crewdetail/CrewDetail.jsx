import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CrewDetailCheck } from "../../../components/CrewDetailCheck"; // CrewDetailCheck 을 import
import { BackArrow } from "../../../components/backArrow/BackArrow";
import axios from "axios";
import { baseURL } from "../../../constants/constants";

export const CrewDetail = () => {
  const [crewDetail, setCrewDetail] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://${baseURL}/mypage/${localStorage.getItem("groupId")}/`)
      .then((res) => {
        console.log(res.data);
        setCrewDetail(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <>
      <Header>
        <BackArrow />
      </Header>

      <container>
        <CrewDetailCheck
          title={crewDetail?.name}
          isReviewed={crewDetail?.isEnded} // Assuming the "isReviewed" property is part of the response
          category={crewDetail?.category}
          memberLimit={crewDetail?.peopleLimit}
          startdate={crewDetail?.startDate}
          finishdate={crewDetail?.finishDate}
          description={crewDetail?.detail}
          curriculum={crewDetail?.curriculum}
        />
        {crewDetail?.owner.id === crewDetail?.id && (
          <ButtonGroup>
            <Button onClick={() => navigate("/mypage/crewdetail/write-review")}>
              스터디 종료
            </Button>
            <Button onClick={() => navigate("/mypage/crewdetail/member")}>
              스터디원
            </Button>
          </ButtonGroup>
        )}
      </container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 4rem;
  height: inherit;
  background-color: #f8f8f8;
`;

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
  border-radius: 20px;
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
