import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import lions from '../img/lions.jpeg';

const Photo = styled.img`
  width: 500px;
  height: 500px;
`;

const PhtoContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  margin-top: 30px;
`;

const TextContainer = styled.div`
  padding-left: 20px;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const BackButton = styled(Link)`
  width: 150px;
  height: 50px;
  background-color: #0876D7;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 10px;
`;

const NotFound = () => {
  return (
    <>
      <TextContainer>
        <Title>멋쟁이사자가 당신을 기다리고 있습니다.</Title>
      </TextContainer>
      <PhtoContainer>
        <Photo src={lions} alt="lions" />
        <ButtonContainer>
          <BackButton to="/">뒤돌아서 도망가기!</BackButton>
        </ButtonContainer>
      </PhtoContainer>
    </>
  );
};

export default NotFound;
