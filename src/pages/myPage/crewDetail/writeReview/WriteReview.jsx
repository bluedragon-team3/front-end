import React, { useState } from "react";
import { BackArrow } from "../../../../components/backArrow/BackArrow";
import styled from "styled-components";
import axios from "axios";
import { baseURL } from "../../../../constants/constants";

export const WriteReview = () => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseURL}/review`, {
        content: text,
        groupId: localStorage.getItem("groupId"),
        userId: localStorage.getItem("userId"),
      })
      .then((res) => {
        console.log(res.data);
        alert("저장이 성공함!!");
      })
      .catch((error) => {
        alert("에러가 발생함!!", error);
      });
  };

  return (
    <Container>
      <Header>
        <BackArrow />
        <h1 style={{ margin: 0 }}>회고록 작성하기</h1>
      </Header>
      <Content>
        다음 모임을 위해 <br />
        남겨주고 싶은 팁을 작성해주세요!
      </Content>
      <TextContainer>
        <Text onChange={onChange}>
          여기에 작성해주세요!! 예제도 보여드릴까요?
        </Text>
        <Button onClick={onSubmit}>작성 완료</Button>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 30px;

  padding: 30px;
`;

const Header = styled.div`
  display: flex;
  gap: 20px;
`;
const Content = styled.p`
  margin: 0;

  text-align: center;
  word-break: keep-all;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 30px;
  background-color: #c5f8ff;

  border-radius: 20px;
`;
const Text = styled.textarea`
  width: 100%;
  height: 470px;
  padding: 20px;

  box-sizing: border-box;

  outline: none;
  border: none;
  border-radius: 20px;

  font-size: 16px;
  resize: none;
`;

const Button = styled.button`
  padding: 20px;

  border-radius: 20px;
  background-color: #1a3f47;

  color: white;
  font-size: 20px;
`;
