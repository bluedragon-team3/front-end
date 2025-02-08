import React from "react";
import { CrewListItem } from "../../components/crewListItem/CrewListItem";
import { CLOSED_CREW_LIST } from "../../../public/constants/constants";
import styled from "styled-components";
import { ToHomeButton } from "../../components/toHomeButton/ToHomeButton";

export const ClosedCrew = () => {
  return (
    <Container>
      <ToHomeButton />
      {CLOSED_CREW_LIST.map((crew) => (
        <CrewListItem
          id={crew.id}
          title={crew.title}
          category={crew.category}
          content={crew.content}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  padding: 20px;
`;
