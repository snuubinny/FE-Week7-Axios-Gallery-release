import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from "axios";
import Header from "../components/Header";
import Card from "../components/Card";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 90%;
  margin: 20px 0;
`;

const Home = () => {  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://3.36.127.43:8080/imageAll")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Container>
       
      <Header />
      <GridContainer>
        {posts.map((post) => (
          
            <Card
              key={post.id}
              id={post.id}
              images={post.imageURL}
              name={post.imageName}
              text={post.imageText}
            />

        ))}
      </GridContainer>
    </Container>
  );
};

export default Home;