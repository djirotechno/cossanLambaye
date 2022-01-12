import React, { Component } from 'react';
import styled from "styled-components";



class indexw extends Component {
    render() {
        return (
            <div>
    
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src="/images/videoCL.mp4" type="video/mp4" />
            </video>
        
            </div>
        );
    }
}


const Container = styled.main`
 
`;
export default indexw;