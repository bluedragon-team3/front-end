import React, { useState } from "react";
import styled from "styled-components";

export const Review = () => {

    return (
        <Container>
            <Title>회고록</Title>
            <Card>
                <textarea
                    name="postContent"
                    defaultValue=""
                    rows={4}
                    cols={40}
                />
            </Card>
        </Container>
    )

}

const Title = styled.h1`
  text-align: center;
  color: #6a6a6a;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  gap: 1rem;


  padding: 0 4rem;
  height: inherit;
  background-color: #f8f8f8;
`;

const Card = styled.div`
  width: 350px;
  padding: 20px;
  background-color: #c7f4ff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;