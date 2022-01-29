import React, { Component } from 'react';
import styled from 'styled-components';

class Lambaye extends Component {
    render() {
        return (
        <Container>
            <div>
              
            <br/>
                <h2>Lambaye</h2>
                <hr/>
                <blockquote>
                    <p>"Lambaye est une commune située  au Centre -Ouest-du Sénégal. Elle fait partie du département de Bambey et de la région de Diourbel. 
                        La commune de Lambaye compte plus de 30 0000 habitants et est chef-lieu d'arrondissement avec quatre communes : Réfane, Ngogom, Gawane et Lambaye.
                    </p>
                    <p>
                    Sur le plan historique, Lambaye occupe une place importante dans l’histoire du Sénégal. Elle fut la capitale du royaume du Bawol où résidaient les Teeñs. Le nom Lambaye vient du nom d’un vieux berger : Lambane Sene. 
                       
                     Les activités économiques sont :l'agriculture l'élevage et le commerce
                    </p>
                </blockquote>
                <h2>Sites Historiques</h2>
                <hr/>
                <blockquote>
                <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1WgxfgMVwtnhYj6wysX7stlHZ23Jkc-nl&ehbc=2E312F" width="900" height="480"></iframe>
                lorem
                </blockquote>
              
            </div>
        </Container>
        )
    }
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
export default Lambaye;