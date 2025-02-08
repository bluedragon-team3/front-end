import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyPageButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate("/mypage");
      }}
    >
      <img src="/assets/userImg.svg" />
    </Button>
  );
};

export default MyPageButton;

const Button = styled.button`
  background-color: transparent;
  border: 0;
`;
