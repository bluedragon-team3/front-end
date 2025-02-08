import React, { useState } from "react";
import styled from "styled-components";

export const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onIdChange = (e) => setId(e.target.value);
  const onpasswordChange = (e) => setPassword(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("signId", id);
    formData.append("password", password);

    axios
      .post(`${baseURL}/user/login`, formData)
      .then((res) => {
        console.log(res.data);
        //유저 정보 로컬스토리지에 저장
        //id, signId, name, studnetNumber
      })
      .catch((error) => {
        alert("로그인에 실패하셨습니다!!");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70%",
      }}
    >
      <Container>
        <Header>
          <Title>로그인</Title>
        </Header>
        <Label>아이디</Label>
        <Input type="text" onChange={onIdChange} />

        <Label>비밀번호</Label>
        <Input type="password" onChange={onpasswordChange} />

        <Button onClick={onSubmit}>로그인</Button>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 20px;
  background: #fff;
  text-align: center;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  margin: 10px 0 5px;
  font-weight: bold;
  color: #2c3e50;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 15px;
  border: none;
  background: #ccf5ff;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  border: none;
  background: #2c3e50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 1em;
`;
const Header = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  height: 300px;
  justify-content: center; /* 가운데 정렬 */
`;
