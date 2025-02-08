import React, { useEffect, useState } from "react";
import { CrewListItem } from "../../components/crewListItem/CrewListItem";
import styled from "styled-components";
import { ToHomeButton } from "../../components/toHomeButton/ToHomeButton";
import MyPageButton from "../../components/mypage/MyPageButton";
import { baseURL, OPENED_CREW_LIST } from "../../constants/constants";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export const OpenedCrew = () => {
  const navigate = useNavigate();
  const [crewList, setCrewList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${baseURL}/group/`)
      .then((response) => {
        setCrewList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching crew list:", error);
      });
  }, []);

  return (
    <Container>
      <Header>
        <ToHomeButton />
        <MyPageButton />
      </Header>
      <h1>소모임 참여하기</h1>
      <ListContainer>
        {crewList.map((crew) => (
          <CrewListItem
            key={crew.id}
            title={crew.name}
            category={crew.category}
            content={crew.detail}
            onClick={() => {
              localStorage.setItem("groupId", crew.id);
              navigate("/opened-crew/apply");
            }}
          />
        ))}
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 650px;
  overflow-y: auto;

  border-radius: 20px;
`;
