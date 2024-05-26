import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import { useParams } from "react-router-dom";

const Photo = styled.img`
  width: 800px;
  height: 800px;
  margin-top: 20px; 
  align-self: center; 
`;

const Wrapper = styled.div`
 width: 100%;
 height: 950px;
 background-color: white;
 display: flex;
 flex-direction: column;
`;

const TextContainer = styled.div`
  padding-left: 320px; 
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 20px;
  text-align: left;
`;

const Text1 = styled.p`
  font-size: 16px;
  margin: 10px;
  text-align: left;
  margin: 10px 20px;
`;



const Contents = () => {
  const { postId } = useParams();  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://3.36.127.43:8080/imageAll")
      .then((res) => {
        const post = res.data.find(item => item.id === postId);
        setPosts(post);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [postId]);

  return (
    <Wrapper>
      <TextContainer>
        <Title>{posts.imageName}</Title> 
        <Text1>{posts.imageText}</Text1>
      </TextContainer>
      <Photo src={posts.imageURL} />
    </Wrapper>
  );
};

export default Contents;