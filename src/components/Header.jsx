import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import lion from "../img/lion.png";


const LionImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: -140px; 
  margin-right: 500px; 
  margin-left: 20px; 
  
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 250px;
  background-color: white;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Text1 = styled.p`
  font-size: 16px;
  margin: 10px;
  margin-left: 180px;
`;
const Text2 = styled.h1`
  font-size: 16px;
  margin: 0px;
  margin-right: 185px;
`;



const Header = () => {
  const [imgNum, setImgNum] = useState(null);

  useEffect(() => {
    axios
      .get("http://3.36.127.43:8080/imageSize")
      .then((res) => {
        setImgNum(res.data); 
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    
    <StyledHeader>
      <LionImage src={lion} alt="lion" />
      <Title>likeLlion_12th_frontend</Title>
      <Text1>멋쟁이사자처럼 12기 여러분 화이팅! 어른사자로 폭풍성장중..</Text1>
      <Text2>게시물: {imgNum}개</Text2>
    </StyledHeader>
  );
};

export default Header;