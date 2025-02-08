import React from "react";
import styled from "styled-components";

const LinkButton = ({ content, onClick }) => {
  return <Button onClick={onClick}>{content}</Button>;
};

export default LinkButton;

const Button = styled.button`
  padding: 10px;

  width: 90px;
  height: 90px;

  border: 0;
  border-radius: 20px;

  background-color: #c5f8ff;

  font-size: 15px;
  text-align: center;
  word-break: keep-all;

  &:hover {
    background: #1a3f47;
    color: white;
    transition: 1s;
  }
`;
