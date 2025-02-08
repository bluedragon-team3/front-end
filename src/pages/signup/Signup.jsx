import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { baseURL } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [signId, setSignId] = useState("");
  const [password, setPassword] = useState("");

  const onStudentIdChange = (e) => setStudentId(e.target.value);
  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onSignIdChange = (e) => setSignId(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://${baseURL}/user/register/`, {
        signId: signId,
        email: email,
        password: password,
        name: name,
        studentNumber: studentId,
        sex: gender,
      })
      .then((res) => {
        console.log(res.data);
        alert("회원가입에 성공하셨습니다.");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert("회원가입에 실패하셨습니다!!");
      });
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Label>이름</Label>
      <Input type="text" onChange={onNameChange} />

      <Label>학번</Label>
      <Input type="text" onChange={onStudentIdChange} />

      <Label>성별</Label>
      <GenderContainer>
        <GenderButton
          selected={gender === "FEMALE"}
          onClick={() => setGender("FEMALE")}
        >
          여
        </GenderButton>
        <GenderButton
          selected={gender === "MALE"}
          onClick={() => setGender("MALE")}
        >
          남
        </GenderButton>
      </GenderContainer>

      <Label>아이디</Label>
      <Input type="text" onChange={onSignIdChange} />

      <Label>비밀번호</Label>
      <Input type="password" onChange={onPasswordChange} />

      <Label>이메일</Label>
      <Input type="text" onChange={onEmailChange} />

      <Button onClick={onSubmit}>회원가입</Button>
    </Container>
  );
};
const Container = styled.div`
  width: 90%;
  height: 100vh;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;
  text-align: center;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;
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

const GenderContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  margin-bottom: 10px;
`;

const GenderButton = styled.button`
  padding: 8px 15px;
  border-radius: 15px;
  border: none;
  background: ${({ selected }) => (selected ? "#ccf5ff" : "#f5f5f5")};
  cursor: pointer;
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
`;
