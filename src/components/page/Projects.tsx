import { Link } from "react-router-dom";
import styled from "styled-components";
import Taero from "../../images/taero2.jpg";
import Ur5 from "../../images/ur5.gif";;

type PropsType = {};

const Row = styled.div`
  @media (max-width: 1000px) {
    display: block;
  }
  @media (min-width: 1000px) {
    display: flex;
  } 
  flex-direction: row;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

const Header = styled.div`
  background-color: whitesmoke;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  padding-top: 25px;
`;

const Post = styled.div`
  max-width: 480px;
  /* margin-left: auto;
  margin-right: auto; */
  padding-bottom: 20px;
`;

const Link2 = styled(Link)`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  text-align: center;
  max-width: 100%;
  max-height: 270px;
  height: auto;
  &:hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: blue;
  height: 30px;
  width: 130px;
  border: 0;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
  box-shadow: 5px 5px 5px lightgray;
  &:hover {
    background-color: lightgreen;
    transition: 0.3s;
  }
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  };
`

export const Projects = (props: PropsType) => (
  <div>
    <Header><p>Projects</p></Header>
    {/* <Row>
      <Post>
        <Link to="/object-tracking">
          <Img src={Tracking} width={480} alt="Object tracking" />
        </Link>
        <Title>Object tracking toolkit</Title>
        <p>Follow-up of the autonomous vehicle project.</p>
        <Button><ReadMore to="/object-tracking">Read more</ReadMore></Button>
      </Post>

      <Post>
        <Link2 to="/image-generation">
          <Img src={Parrot} width={270} height={270} alt="Image interpolation between parrot and toucan" />
        </Link2>
        <Title>Testing image generation tools</Title>
        <p>Overview of DALL-E text-to-image generator OpenAI kindly shared with me.</p>
        <Button><ReadMore to="/image-generation">Read more</ReadMore></Button>
      </Post>
    </Row> */}
    <Row>
      {/* <Post>
        <Link to="/object-recognition">
          <Img src={Yolo} width={480} alt="Object recognition" />
        </Link>
        <Title>Object recognition for the autonomous vehicle</Title>
        <p>A project with Polish company STEKOP.</p>
        <Button><ReadMore to="/object-recognition">Read more</ReadMore></Button>
      </Post> */}
      <Post>
        <Link2 to="/autonomous-vehicle">
         <Img src={Taero} alt="TAERO autonomous vehicle" />
        </Link2>
        <Title>Perception for the autonomous vehicle</Title>
        <p>Software system for the autonomous military truck. Project realised with Polish company STEKOP.</p>
        <Button><StyledLink to="/autonomous-vehicle">Read more</StyledLink></Button>
      </Post>
      <Post>
        <Link to="/robotic-manipulation">
         <Img src={Ur5} width={480} alt="UR5 robot arm" />
        </Link>
        <Title>Solving robotic manipulation problems</Title>
        <p>My bachelor thesis under the supervising of PhD Adam Wolniakowski.</p>
        <Button><StyledLink to="/robotic-manipulation">Read more</StyledLink></Button>
      </Post>
    </Row>
    {/* <Row>
      <Post>
        <Link to="/human-arm">
         <Img src={Arm} width={480} alt="Lego human arm" />
        </Link>
        <Title>Lego human arm</Title>
        <p>Archival project from a high school.</p>
        <Button><ReadMore to="/human-arm">Read more</ReadMore></Button>
      </Post>
    </Row> */}
  </div>
);
