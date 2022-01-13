import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import listes from '../db.json';
import { createTheme, ThemeProvider } from '@material-ui/core'
import AudioPlayer from 'material-ui-audio-player'
import ShareIcon from '@mui/icons-material/Share';
import InstagramIcon from '@mui/icons-material/Instagram';
import {FacebookShareButton,FacebookIcon, FacebookMessengerIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton,LinkedinIcon} from 'react-share'; 

const Detail = (props) => {
  const muiTheme = createTheme({});
  const { id } = useParams(); 
  return (
    <Container>
        <hr/>

      <ContentMeta>
        
      {   listes.filter((list)=>list.id == id).map((list)=>(
        
        <Controls key={list.id}>

     
        <Row >
          <Col size={5}>
            <Image>
              <img src={list.image}/>
            </Image>
                <br/>
              <ThemeProvider theme={muiTheme}>
              <AudioPlayer
                elevation={1}
                width="100%"
                variation="default"
                spacing={3}
                download={false}
                autoplay={false}
                order="standart"
                preload="auto"
                loop={true}
                src={list.audio}
              />
              </ThemeProvider>
                <br/>
                <br/>
              <Social>
        
                  <FacebookShareButton 
                  url={'https://studentsforsenegal.org'}
                  >
                    <FacebookIcon size={40} round={true}/>
                  </FacebookShareButton>

                  <TwitterShareButton 
                  url='https://studentsforsenegal.org'>
                    <TwitterIcon size={40} round={true}/>
                  </TwitterShareButton>

                  <LinkedinShareButton 
                  url='https://studentsforsenegal.org'>
                      <LinkedinIcon size={40} round={true}/>
                  </LinkedinShareButton>
                </Social>
            </Col>
            <Col size={6}>
            <ScrollDiv>
                <ScrollContent>
                            {list.texts}
                </ScrollContent>
      
               </ScrollDiv>
                </Col>
        </Row>

        </Controls>
        ))}
          <hr/>

        <Description></Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 50px;
  padding: 0 calc(3.5vw + 3px);
`;



const ContentMeta = styled.div`
 
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;






const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;



const Row = styled.div`
display:flex;
align-items:center;
flex-wrap:wrap;
`;

const Social = styled.div`

display:flex;
align-items:center;
flex-wrap:wrap;
justify-content:center;

`;

const Col = styled.div`

flex:${(props)=>props.size};

`;

const Image = styled.div`
padding-top: 56.25%;
margin-right: 5%;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {


    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
    
  }
`;
const ScrollDiv = styled.div`
margin-top:10px;
margin-bottom:20px;
overflow:auto;
height:500px;
width:100%;
`;

const ScrollContent = styled.div`
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
height:800px;
width:px;
padding:20px;

`;
export default Detail;
