import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import listes from '../db.json';
import { createTheme, ThemeProvider } from '@material-ui/core'
import AudioPlayer from 'material-ui-audio-player'
import ShareIcon from '@mui/icons-material/Share';
import InstagramIcon from '@mui/icons-material/Instagram';
import {FacebookShareButton,FacebookIcon, FacebookMessengerIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton,LinkedinIcon} from 'react-share'; 
import {devices} from '../responsive'
import './stylemediaquery.css'
  const Detail = (props) => {
  const muiTheme = createTheme({});
  const { id } = useParams(); 
  const ID = "'https://cossanlambaye.herokuapp.com/'"
  return (
    <Container>

{   listes.filter((list)=>list.id == id).map((list)=>(
            <div class="row" key={list.id}>
              <br/>
              <br/>
              <hr/>
              <div class="column" >
             
                <Image>
                  <img src={list.image}/>
                </Image>
                <div>
                  <br/>
                  <br/>
                <ThemeProvider theme={muiTheme}>
                  <AudioPlayer
                    elevation={1}
                    width="100%"
                    variation="default"
                    spacing={3}
                    download={false}
                    autoplay={true}
                    order="standart"
                    preload="auto"
                    loop={true}
                    src={list.audio}
                  />
                </ThemeProvider>
                
              </div>
              </div>
              <div class="column" >
              <iframe src={list.texts} title="rôledesFaras"  height="500px" width="800px"/>
              </div>
           
            </div>
            
 ))
}

        {/* <hr/>
      {   listes.filter((list)=>list.id == id).map((list)=>(
        <Controls key={list.id}>
          <div className="row">
            <div className="column">
              <Image>
                <img src={list.image}/>
              </Image>
                  <br/>
                <ThemeProvider theme={muiTheme} className="player">
                  <AudioPlayer
                    elevation={1}
                    width="100%"
                    variation="default"
                    spacing={3}
                    download={false}
                    autoplay={true}
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
                      url='https://cosaanulambaay.org'
                      quote={list.theme}>
                        <FacebookIcon size={40} round={true}/>
                    </FacebookShareButton>

                    <TwitterShareButton 
                      url='https://cosaanulambaay.org/'
                      quote={list.theme}>
                      <TwitterIcon size={40} round={true}/>
                    </TwitterShareButton>

                    <LinkedinShareButton 
                        url='https://cosaanulambaay.org'
                        quote={list.theme}>
                        <LinkedinIcon size={40} round={true}/>
                    </LinkedinShareButton>
                </Social>
            </div>
            <div className="column" id="contentext">
                <iframe src={list.texts} title="rôledesFaras" height="500px" width="800px" />
            </div>
          </div>
        </Controls>
        ))
      }
          <hr/> */}
    </Container>
  )}
  const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 50px;
  padding: 0 calc(3.5vw + 3px);
 `;

 const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
 
`;







const Social = styled.div`
display:flex;
align-items:center;
flex-wrap:wrap;
justify-content:center;

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


  @media ${devices.mobileS} {
    max-width: 320px;
  }

  

`;
export default Detail;
