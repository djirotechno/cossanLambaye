import React, { Component } from 'react';
import styled from "styled-components";
import './style.css'


class indexw extends Component {
    render() {
        return (
        
                <div>
                    
                    <video autoPlay={true} loop={true} playsInline={true} id="vid" height="">
                        <source src="/assets/mp3/VideoCL.mp4" type="video/mp4" />
                    </video>
                    <a href="/home">
                    <Button>
                       DALLEN  AK  DIAM
                    </Button>
                    </a> 
                </div>
         
        );
    }
}

const Button = styled.button`

position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #132e12;;
    color: white;
    font-size: 30px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    display:block;
`;



export default indexw;