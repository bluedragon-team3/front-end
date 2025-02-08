import React, { useEffect, useState } from "react";
import { CrewListItem } from "../../components/crewListItem/CrewListItem";
import styled from "styled-components";
import { ToHomeButton } from "../../components/toHomeButton/ToHomeButton";
import MyPageButton from "../../components/mypage/MyPageButton";
import { OPENED_CREW_LIST } from "../../constants/constants";

import axios from "axios";


export const OpenedCrew = () => {

  //api연동
  const [crewList, setCrewList] = useState([]);

  useEffect(() => {
    axios
    .get("")
    .then((response) => {
      setCrewList(response.data);
    })
    .catch((error) => {
      console.error("Error fetching crew list:", error);
    });
  },[]);

  // const handleCrewClick = (id) => {
  //   navigate(`/detail/${id}`);  // 상세 페이지로 id 전달
  // };
////
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
            id={crew.id}
            title={crew.title}
            category={crew.category}
            content={crew.content}
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
