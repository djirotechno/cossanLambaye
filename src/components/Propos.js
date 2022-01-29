
import React, { Component } from 'react'
import styled from 'styled-components';
import './StyleText.css'



export default class Propos extends Component {
    render() {
        return (
            <Container>
                <br/>
                <h2>Cossanu Lambaye</h2>
                <blockquote>
                    <p>
                      "Dans quelle mesure l’oralité joue-t-elle un rôle dans la vie quotidienne en Afrique de l'Ouest, 
                      comment s'exprime-t-elle? 
                      L’oralité est-elle en danger? 
                      Y a-t-il des développements qui menacent la tradition orale? 
                      L'oralité est-elle plus prononcée à la campagne et dans les villages qu'en ville? 
                      Y a-t-il des différences ? Et si oui, lesquelles? Existe-t-il des situations de conflit entre l’oralité et l’écriture? 
                      Pourquoi y a-t-il moins de bibliothèques sur le continent africain que sur les autres continents? 
                      Comment fonctionnent ces bibliothèques et quelles sont leurs tâches? 
                      Existe-t-il un concept de bibliothèque africaine? 
                      Existe-t-il déjà dans les bibliothèques des formats qui jettent un pont entre l’oralité et l’écriture? 
                      Quel rôle les griots et les conteurs peuvent-ils jouer dans les bibliothèques?
                      </p>
                      <p>
                      En 2019, des experts se sont réunis en Côte d’Ivoire, au Sénégal, au Ghana, au Cameroun et en Afrique du Sud et ont traité de ces questions. 
                      La bibliothèque en Afrique a été remise en question, en tant que concept occidental et colonial de transfert et de préservation du savoir. 
                      De plus, d'autres formes de conservation et de transfert du savoir ont été thématisées. 
                      Une attention particulière a été accordée à l'oralité et au rôle de la numérisation dans le transfert d'informations et le transfert du savoir.
                      </p>
                      <p>
                      C’est dans ce cadre qu'est né le projet “Cosaanu Lambaay” financé par le Goethe Institut qui est un programme culturel basé sur le SLAM pour connecter les enfants à l'histoire de Lambaye. 
                      Le programme initié par Lambaye Learning Center vise à collecter de la documentation sur l’histoire de Lambaye auprès des hommes et femmes de culture (griots, historiens, personnes âgées…)
                        et de former les enfants à travers des ateliers d’écriture, de SLAM... pour qu’ils puissent en retour raconter l’histoire de l’ancienne capitale du Baol sous forme de SLAM. 
                      Ces productions peuvent être consultées à la bibliothèque du centre et en ligne sous format papier, numérique et audio.
                      Ce programme cherche de façon spécifique à : 
                      Faire renaître et valoriser l’oralité dans les bibliothèques à travers le SLAM
                      Montrer et valoriser la richesse de l’histoire de Lambaye
                      Initier les enfants aux techniques de SLAM.
                    </p>
                </blockquote>
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
    opacity: 2;
    z-index: -1;
  }
`;

