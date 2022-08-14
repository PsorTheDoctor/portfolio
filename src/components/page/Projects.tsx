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
  gap: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  gap: 10px;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  float: left;
  padding-bottom: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`

export const Projects = (props: PropsType) => (
  <div>
    <Header>
      <p>Projects</p>
    </Header>

    <Wrapper>
      <Post>
        <video width="480px" height="270px" autoPlay muted>
          <source src={ThumbYolo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Title>Object recognition for the autonomous vehicle</Title>
        <p>A project with Polish company STEKOP.</p>
        <button><Link to="/object-recognition">Read more</Link></button>
      </Post>

      <Post>
        <video width="480px" height="270px" autoPlay muted>
          <source src={ThumbUR5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Title>Solving robotic manipulation problems</Title>
        <p>My bachelor thesis under the supervising of PhD Adam Wolniakowski.</p>
        <button><Link to="/robotic-manipulation">Read more</Link></button>
      </Post>
    </Wrapper>
  </div>
);
