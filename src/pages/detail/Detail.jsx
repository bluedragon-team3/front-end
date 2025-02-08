import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {CrewDetailCheck} from "../../components/CrewDetailCheck"
import { BackArrow } from "../../components/backArrow/BackArrow";

import axios from "axios";

export const Detail = () => {
    const [crewDetails, setCrewDetails] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://175.120.73.56:9090/group/${localStorage.getItem("groupId")}`)
              .then((response) => {
                setCrewDetails(response.data); // Set the fetched crew details
              })
              .catch((error) => {
                //console.error("Error fetching crew details:", error);
              });
          
        
    },[]);


    
    return (

    <>
        <Header>
            <BackArrow />
            <Title>기록 열람</Title>
        </Header>
        
        <ContentWrapper>
        <CrewDetailCheck
            title={crewDetails?.title}
            isReviewed={crewDetails.isReviewed} // Assuming the "isReviewed" property is part of the response
            category={crewDetails.category} 
            memberLimit={crewDetails.memberLimit}
            startdate={crewDetails.startdate}
            finishdate={crewDetails.finishdate}
            description={crewDetails.description}
            curriculum={crewDetails.curriculum}
            review={crewDetails.review}
            
            />
        </ContentWrapper>

            <ButtonGroup>
                <Button onClick={() => navigate("/study-end")}>스터디 종료</Button>
                <Button onClick={() => navigate("/members")}>스터디원</Button>
            </ButtonGroup>
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