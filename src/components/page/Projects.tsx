import { Link } from "react-router-dom";
import styled from "styled-components";
import ThumbYolo from "../../videos/thumb_yolo.mp4";
import ThumbUR5 from "../../videos/thumb_ur5.mp4";

type PropsType = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  margin-top: 25px;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  float: left;
  padding-bottom: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: blue;
  height: 30px;
  width: 150px;
  border: 0;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Projects = (props: PropsType) => (
  <div>
    <Header><p>Projects</p></Header>
    <Wrapper>
      <Post>
        <video width="480px" loop autoPlay muted>
          <source src={ThumbYolo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Title>Object recognition for the autonomous vehicle</Title>
        <p>A project with Polish company STEKOP.</p>
        <Button><Link to="/object-recognition">Read more</Link></Button>
      </Post>

      <Post>
        <video width="480px" loop autoPlay muted>
          <source src={ThumbUR5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Title>Solving robotic manipulation problems</Title>
        <p>My bachelor thesis under the supervising of PhD Adam Wolniakowski.</p>
        <Button><Link to="/robotic-manipulation">Read more</Link></Button>
      </Post>
    </Wrapper>
  </div>
);
