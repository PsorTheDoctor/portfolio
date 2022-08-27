import { Link } from "react-router-dom";
import styled from "styled-components";
import Kangaroo from "../../images/kangaroo.jpg";
import Yolo from "../../images/yolo.gif";
import Ur5 from "../../images/ur5.gif";
import Arm from "../../images/arm.gif";

type PropsType = {};

const Wrapper = styled.div`
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

const Img = styled.img`
  text-align: center;
  max-width: 100%;
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

const ReadMore = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  };
`

export const Projects = (props: PropsType) => (
  <div>
    <Header><p>Projects</p></Header>
    <Wrapper>
      <Post>
        <Link to="/image-generation">
          <Img src={Kangaroo} width={393} height={270} alt="Kangaroo weraing an orange hoodie and blue sunglasses" />
        </Link>
        <Title>Testing image generation tools</Title>
        <p>Overview of DALL-E text-to-image generator OpenAI kindly shared with me.</p>
        <Button><ReadMore to="/image-generation">Read more</ReadMore></Button>
      </Post>

      <Post>
        <Link to="/object-recognition">
          <Img src={Yolo} width={480} alt="Object recognition" />
        </Link>
        <Title>Object recognition for the autonomous vehicle</Title>
        <p>A project with Polish company STEKOP.</p>
        <Button><ReadMore to="/object-recognition">Read more</ReadMore></Button>
      </Post>
    </Wrapper>
    <Wrapper>
      <Post>
        <Link to="/robotic-manipulation">
         <Img src={Ur5}  width={480} alt="UR5 robot arm" />
        </Link>
        <Title>Solving robotic manipulation problems</Title>
        <p>My bachelor thesis under the supervising of PhD Adam Wolniakowski.</p>
        <Button><ReadMore to="/robotic-manipulation">Read more</ReadMore></Button>
      </Post>

      <Post>
        <Link to="/human-arm">
         <Img src={Arm}  width={480} alt="Lego human arm" />
        </Link>
        <Title>Lego human arm</Title>
        <p>Archival project from a high school.</p>
        <Button><ReadMore to="/human-arm">Read more</ReadMore></Button>
      </Post>
    </Wrapper>
  </div>
);
