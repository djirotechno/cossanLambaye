import React, { Component } from 'react';
import styled from "styled-components";
import './style.css'


class indexw extends Component {
    render() {
        return (
        
                <div>
                    
                    <video autoPlay={true} loop={true} playsInline={true} id="vid">
                        <source src="https://youtu.be/puRuG_J_j4g" type="video/mp4" />
                    </video>
                    <a href="/home">
                    <Button>
                       DAL LEN AK DIAM
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
    background-color: #555;
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;

`;



export default indexw;