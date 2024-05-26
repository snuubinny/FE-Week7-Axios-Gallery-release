import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Margin from "./Margin";

const Photo = styled.img`
  width: 170px;
  height: 170px;
`;

const Wrapper = styled.div`
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 16px;
  margin: 0;
`;

export default function Card({ id, images, name, text }) {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/post/${id}`)}>
      <Photo src={images} />
      <Margin height={10} />
      <Title>{name}</Title>
      <p>{text}</p>
    </Wrapper>
  );
}