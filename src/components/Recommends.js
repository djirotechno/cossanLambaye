import styled from "styled-components";
import { Link } from "react-router-dom";
import movies from '../db.json' 
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Recommends = (props) => {
  
  

  return (
    <Container> 
      <ListTheme>
      <FormatListBulletedIcon/>
      <h4>
           Themes
        </h4>
      </ListTheme>

     
        <hr/>
      <Content>
        {
          movies.map((movie, id) => (
            <Wrap key={movie.id}>
              
              <Link to={'/detail/'+ 1}>
                <h3>{movie.titre}</h3>
                <img src={movie.image}  />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};
const ListTheme = styled.div`
align-items: center;
display: flex;
color:#fff;
height: 100%;
justify-content: flex-start;
position: relative;
margin-right: auto;
letter-spacing: 4px;



`;
const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  
  border-radius: 10px;
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
    object-fit:cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Recommends;
