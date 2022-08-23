import { Link } from "react-router-dom";
import styled from "styled-components";
import Kangaroo from "../../images/kangaroo.jpg";
import Yolo from "../../images/yolo.gif";
import Ur5 from "../../images/ur5.gif";

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
  margin-bottom: 25px;
  justify-content: space-between;
  padding: 10px;
`;

const Header = styled.div`
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  margin-top: 25px;
`;

const Post = styled.div`
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
`;

const Img = styled.img`
  text-align: center;
  max-width: 100%;
  &:hover {
    opacity: 0.9;
  }
`;

// const Video = styled.video`
//   @media (min-width: 480px) {
//     width: 480px;
//   }
//   @media (max-width: 480px) {
//     width: 100%;
//   }
//   &::-webkit-media-controls {
//     display: none !important;
//   }
// `;

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
          {/* <Video loop autoPlay muted>
            <source src={ThumbYolo} type="video/mp4" />
            Your browser does not support the video tag.
          </Video> */}
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
          {/* <Video loop autoPlay muted>
            <source src={ThumbUR5} type="video/mp4" />
            Your browser does not support the video tag.
          </Video> */}
        </Link>
        <Title>Solving robotic manipulation problems</Title>
        <p>My bachelor thesis under the supervising of PhD Adam Wolniakowski.</p>
        <Button><ReadMore to="/robotic-manipulation">Read more</ReadMore></Button>
      </Post>
    </Wrapper>
  </div>
);
