import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { baseURL } from "../constants/constants";
import axios from "axios";

export const CrewForm = ({ title, button1Text }) => {
  const navigate = useNavigate();
  const [name, setCrewName] = useState(""); // 소모임 이름
  const [category, setCategory] = useState(""); // 카테고리
  const [peopleLimit, setLimit] = useState(""); // 인원 제한
  const [startDate, setStartDate] = useState(""); // 소모임 시작일
  const [finishDate, setEndDate] = useState(""); // 소모임 종료일
  const [detail, setDescription] = useState(""); // 한 줄 설명
  const [curriculum, setCurriculum] = useState(""); // 커리큘럼

  // 폼 제출 핸들러 (백엔드 연동)
  const handleSubmit = async () => {
    const formData = {
      name,
      curriculum,
      detail,
      category,
      startDate,
      finishDate,
      peopleLimit,
    };
    formData.peopleLimit = Number(formData.peopleLimit); // 숫자로 변환 후 전송

    console.log("보낼 데이터:", formData); // 확인용
    /** const response = await fetch(`http://${baseURL}/group/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), */

    axios
      .post(
        `http://${baseURL}/group/${localStorage.getItem("groupId")}/`,
        formData,
        {
          params: {
            userId: localStorage.getItem("id"), // userId는 쿼리 파라미터로 보내기
          },
        }
      )
      .then((res) => {
        alert("소모임이 성공적으로 생성되었습니다!");
        navigate("/home"); // 성공 시 버튼 액션 실행
        console.log(res.data);
      })
      .catch((error) => {
        console.error("에러 발생:", error);
        alert("서버 오류");
      });
  };

  return (
    <Container>
      <Card>
        <Label>소모임 이름</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setCrewName(e.target.value)}
        />
        <FormRow>
          <Label>카테고리</Label>
        </FormRow>
        <CategorySelect
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            선택하세요
          </option>
          <option value="STUDY_HUMANITIES">스터디</option>
          <option value="HOBBY">취미</option>
          <option value="SPORT">운동</option>
          <option value="ENJOY">오락</option>
          <option value="VOLUNTEER">봉사</option>
        </CategorySelect>

        <FormRow>
          <Label>인원 수 제한</Label>
          <Input
            type="number"
            value={peopleLimit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </FormRow>

        <FormRow>
          <Label>소모임 기간</Label>
          <Input
            type="text"
            placeholder="소모임 시작"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Input
            type="text"
            placeholder="소모임 종료"
            value={finishDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </FormRow>

        <Label>소모임 한줄 설명</Label>
        <Input
          type="text"
          value={detail}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Label>커리큘럼</Label>
        <textarea
          name="postContent"
          value={curriculum}
          onChange={(e) => setCurriculum(e.target.value)}
          rows={4}
          cols={40}
        />
      </Card>

      <ButtonGroup>
        <Button onClick={handleSubmit}>{button1Text}</Button>
      </ButtonGroup>
    </Container>
  );
};

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  width: 90%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 4rem;
  height: 85%;
  background-color: rgb(255, 255, 255);
`;

const Card = styled.div`
  width: 300px;
  height: 75%;
  align-items: center;
  padding: 20px;
  background-color: #c7f4ff;
  border-radius: 15px;
  margin: 0 100px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #6a6a6a;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: bold;
  width: 350px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
  border-radius: 10px;
  background-color: #173f41;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #145055;
  }
`;

const CategorySelect = styled.select`
  padding: 8px;
  border: none;
  border-radius: 10px;
  background-color: #5d4b82;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #4a3a69;
  }
  option {
    background: white;
    color: black;
  }
`;
