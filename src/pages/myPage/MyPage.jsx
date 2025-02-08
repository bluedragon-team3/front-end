import styled from "styled-components";
import { BackArrow } from "../../components/backArrow/BackArrow";
import CrewBlock from "../../components/crewBlock/CrewBlock";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

//const info = { id: "iddd", name: "정보운", studentId: "20222222" };
/*const crewList = [
  { id: 0, title: "멋진 알고리즘 스터디", category: "컴공" },
  { id: 1, title: "농구 스터디", category: "체육" },
  { id: 2, title: "ㅇㅇㅇㅇ", category: "컴퓨터공학과쪽임" },
  { id: 3, title: "스터디", category: "컴공컴공컴공" },
  { id: 4, title: "멋진 알고리즘 스터디", category: "컴공" },
  { id: 5, title: "농구 스터디", category: "체육" },
  { id: 6, title: "ㅇㅇㅇㅇ", category: "컴퓨터공학과쪽임" },
  { id: 7, title: "스터디", category: "컴공컴공컴공" },
  { id: 8, title: "멋진 알고리즘 스터디", category: "컴공" },
  { id: 9, title: "농구 스터디", category: "체육" },
  { id: 10, title: "ㅇㅇㅇㅇ", category: "컴퓨터공학과쪽임" },
  { id: 11, title: "스터디", category: "컴공컴공컴공" },
];*/

export const MyPage = () => {
  const navigate = useNavigate();
  const [crewList, setCrewList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${baseURL}/mypage/`, {
        params: {
          userId: localStorage.getItem("id") /*로컬스토리지에서 가져오기 */,
        },
      })
      .then((response) => {
        setCrewList(response.data);
      })
      .catch((error) => {
        alert("에러입니다!");
      });
  }, []);
  return (
    <Container>
      <Header>
        <BackArrow />
        <Title>마이페이지</Title>
      </Header>

      <Infos>
        <InfoText>id: {localStorage.getItem("id")}</InfoText>
        <InfoText>
          이름: {localStorage.getItem("name") /* 로컬스토리지에서 가져오기 */}
        </InfoText>
        <InfoText>학번: {localStorage.getItem("studentNumber")}</InfoText>
      </Infos>

      <TitleBlock>내가 관리 중인 소모임</TitleBlock>
      <CrewContainer>
        {crewList.map((each) => (
          <CrewBlock
            key={each.id}
            title={each.name}
            category={each.category}
            onClick={() => {
              navigate("/mypage/crewDetail");
              //그룹 아이디를 로컬스토리지에
            }}
          />
        ))}
      </CrewContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 40px;

  padding: 30px;
`;

const Header = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
`;

const Title = styled.p`
  margin: 0;
  width: 100%;

  font-size: 32px;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
const InfoText = styled.p`
  position: relative;

  margin: 0;
`;

const TitleBlock = styled.span`
  padding: 20px 0;
  width: 100%;

  border-radius: 10px;
  background-color: #e7fcff;

  text-align: center;
  word-break: keep-all;
`;
const CrewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  max-height: 500px;
  overflow-y: auto;
`;
