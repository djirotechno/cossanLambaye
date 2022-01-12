import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core'
import AudioPlayer from 'material-ui-audio-player'

import styled from 'styled-components'
import ShareIcon from '@mui/icons-material/Share';
import InstagramIcon from '@mui/icons-material/Instagram';
import {FacebookShareButton,FacebookIcon, FacebookMessengerIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton,LinkedinIcon} from 'react-share'; 
export default function Player() {
    
const muiTheme = createTheme({});

const src = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.wav',
];

    return (
        <div>  
          <Container>
            
          <hr/>

              <Row>
                <Col size={5}>
                  <Image>
                   <img src="/assets/slamer/cosaanulambaayAD.png"/>
                  </Image>
                  <br/>
                    <ThemeProvider theme={muiTheme}>
                    <AudioPlayer
                      elevation={1}
                      width="100%"
                      variation="default"
                      spacing={3}
                      download={true}
                      autoplay={false}
                      order="standart"
                      preload="auto"
                      loop={true}
                      src={src}
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae fuga quam eaque illo animi assumenda totam vel reiciendis, error vitae? Tenetur corporis quasi molestiae rerum voluptatum quam, voluptas nisi.
                    </ScrollContent>
                    
                  </ScrollDiv>
                </Col>
              </Row>
              <hr/>

          </Container>
        </div>
    )
}




const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/assets/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
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