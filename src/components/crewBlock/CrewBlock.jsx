import styled from "styled-components";

const CrewBlock = ({ title, category, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>
      <Category>카테고리: {category}</Category>
    </Container>
  );
};

export default CrewBlock;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 18px;

  width: 150px;
  height: 150px;

  border: 2px #1a3f47 solid;
  border-radius: 20px;

  text-align: center;
  word-break: keep-all;

  &:hover {
    background: #1a3f47;
    color: #1a3f47;
    transition: 1s;
  }
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;

  width: 120px;
  height: 62px;

  border-radius: 20px;

  background-color: #c5f8ff;
`;

const Category = styled.p`
  margin: 0;
  width: 90%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
