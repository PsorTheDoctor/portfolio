import React, { useState, ChangeEvent } from 'react';
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";

import policies from "../../images/policies.png";
import results from "../../images/robomimic_results.png";

import bet_pusht_state from "../../videos/thesis/pusht/mini_bet_state_tr.gif";
import bet_pusht_hybrid from "../../videos/thesis/pusht/mini_bet_hybrid_tr.gif";
import bet_pusht_vision from "../../videos/thesis/pusht/mini_bet_vision_tr.gif";
import dp_pusht_state from "../../videos/thesis/pusht/dp_state_tr.gif";
import dp_pusht_hybrid from "../../videos/thesis/pusht/dp_hybrid_tr.gif";
import dp_pusht_vision from "../../videos/thesis/pusht/dp_vision_2_tr.gif";
import ibc_pusht_state from "../../videos/thesis/pusht/ibc_state_tr.gif";
import ibc_pusht_hybrid from "../../videos/thesis/pusht/ibc_hybrid_tr.gif";

import bet_lift_state from "../../videos/thesis/bet_state/Lift_epoch_60.mp4";
import bet_can_state from "../../videos/thesis/bet_state/PickPlaceCan_epoch_600.mp4";
import bet_square_state from "../../videos/thesis/bet_state/NutAssemblySquare_epoch_2000.mp4";
import bet_toolhang_state from "../../videos/thesis/bet_state/ToolHang_epoch_1800.mp4";
import dp_lift_state from "../../videos/thesis/dp_state/Lift_epoch_90.mp4";
import dp_can_state from "../../videos/thesis/dp_state/PickPlaceCan_epoch_600.mp4";
import dp_square_state from "../../videos/thesis/dp_state/NutAssemblySquare_epoch_600.mp4";
import dp_toolhang_state from "../../videos/thesis/dp_state/ToolHang_epoch_1000.mp4";

import bet_lift_vision from "../../videos/thesis/bet_vision/Lift_epoch_100.mp4";
import bet_can_vision from "../../videos/thesis/bet_vision/PickPlaceCan_epoch_1000.mp4";
import bet_square_vision from "../../videos/thesis/bet_vision/NutAssemblySquare_epoch_2000.mp4";
import dp_lift_vision from "../../videos/thesis/dp_vision/Lift_epoch_60.mp4";
import dp_can_vision from "../../videos/thesis/dp_vision/PickPlaceCan_epoch_1400.mp4";
import dp_square_vision from "../../videos/thesis/dp_vision/NutAssemblySquare_epoch_1800.mp4";

import bet_lift_hybrid from "../../videos/thesis/bet_hybrid/Lift_epoch_90.mp4";
import bet_can_hybrid from "../../videos/thesis/bet_hybrid/PickPlaceCan_epoch_600.mp4";
import bet_square_hybrid from "../../videos/thesis/bet_hybrid/NutAssemblySquare_epoch_800.mp4";
import dp_lift_hybrid from "../../videos/thesis/dp_hybrid/Lift_epoch_70.mp4";
import dp_can_hybrid from "../../videos/thesis/dp_hybrid/PickPlaceCan_epoch_2000.mp4";
import dp_square_hybrid from "../../videos/thesis/dp_hybrid/NutAssemblySquare_epoch_1000.mp4";

import dp_can_stationary from "../../videos/thesis/dp_vision_stationary/PickPlaceCan_epoch_2000.mp4";
import dp_can_end_eff from "../../videos/thesis/dp_vision_end_eff/PickPlaceCan_epoch_1000.mp4";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: darkslategray;
  max-width: 1000px;
  margin: 0 auto 0 auto;
  text-align: justify;
  padding: 10px 10px 30px 10px;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
`;

const Subtitle = styled.span`
  text-align: center;
  font-size: 18px;
`;

const Header = styled.h4`
  margin: 30px 0 25px 0;
`;

const Errata = styled.span`
  font-size: 13px;
  max-width: 600px;
  margin: 0 auto 0 auto;
  text-align: justify;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
  margin: 0 auto 15px auto;
`;

const Button = styled.button`
  background-color: darkslategray;
  color: white;
  width: 120px;
  height: 30px;
  border: 0;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  padding: 5px 20px 5px 20px;
  margin-bottom: 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);;
  &:hover {
    background-color: lightgreen;
    transition: 0.3s;
  }
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

const GitHub = styled(GitHubIcon)`
  transform: scale(0.8);
  margin-right: 5px;
  position: relative;
  top: -2px; 
`;

const Abstract = styled.div`
  max-width: 800px;
  margin: 0 auto 0 auto;
`;

const Column = styled.div`
  float: left;
  padding-right: 20px;
  @media (max-width: 1000px) {
    max-width: 100%;
  }
  @media (min-width: 1000px) {
    max-width: 350px;
  }
`;

const ColumnImg = styled.img`
  display: flex;
  float: left;
  max-width: 100%;
  margin: 0 auto 0 auto;
`;

const Radio = styled.div`
  background-color: lightgray;
  margin: 0 auto 15px auto;
  border-radius: 15px;
`

interface ToggleButtonProps {
  modality: string;
}

const ToggleButton = styled.button<ToggleButtonProps>`
  background-color: lightgray;
  color: darkslategray;
  width: 120px;
  height: 30px;
  border: 0;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  padding: 5px 20px 5px 20px;
  &:hover {
    background-color: darkslategray;
    color: white;
    transition: 0.3s;
  }
`;

const LeftButton = styled(ToggleButton)`
  background-color: ${({ modality }) => (modality === 'state' ? 'darkslategray' : 'lightgray')};
  color: ${({ modality }) => (modality === 'state' ? 'white' : 'darkslategray')};
`;
const MiddleButton = styled(ToggleButton)`
  background-color: ${({ modality }) => (modality === 'image' ? 'darkslategray' : 'lightgray')};
  color: ${({ modality }) => (modality === 'image' ? 'white' : 'darkslategray')};
`;

const RightButton = styled(ToggleButton)`
  background-color: ${({ modality }) => (modality === 'hybrid' ? 'darkslategray' : 'lightgray')};
  color: ${({ modality }) => (modality === 'hybrid' ? 'white' : 'darkslategray')};
`;

const TableSmall = styled.table`
  border-collapse: collapse;
  text-align: center;
  margin: 0 auto 25px auto;
  font-size: 12px;
`;

const Table = styled.table`
  max-width: 800px;
  border-collapse: collapse;
  text-align: center;
  margin: 0 auto 0 auto;
`;

const Vertical = styled.td`
  transform: rotate(-90deg);
  transform-origin: center; 
  white-space: nowrap; 
  font-size: 18px;
  max-width: 30px;
`;

const ScoreTable = styled.table`
  text-align: center;
  margin: 10px auto 50px auto;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  td, th {
    min-width: 100px;
    padding: 0 25px 0 25px;
  }
  thead, tr:nth-child(even) {
    background-color: #cfecec;
  }
  thead > td:first-child {
    border-radius: 25px 0 0 25px;
  }
  tbody > td:last-child {
    border-radius: 0 15px 15px 0;
  }
  thead tr th {
    padding-top: 10px;
  }
  tbody tr:last-child td {
    padding-bottom: 10px;
  }
`;

const Img = styled.img`
  margin: 0 auto 0 auto;
`;
 
const Center = styled.span`
  text-align: center;
`;

const LinkA = styled.a`
  text-decoration: none;
`;

export const VisuomotorRobotPoliciesAuth = () => {
  const correctPassword = 'banana';

  const [thisPassword, setThisPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setThisPassword(event.target.value);
  };

  const handlePasswordSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    if (thisPassword === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
      setThisPassword('');
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <VisuomotorRobotPolicies />
      ) : (
        <Wrapper>
          <Title><p>Confidential data</p></Title>
          <form onSubmit={handlePasswordSubmit}>
            <label>
              Enter a password to see the content: 
              <input type="password" value={thisPassword} onChange={handlePasswordChange} autoFocus />
            </label>
          </form>
        </Wrapper>
      )}
    </div>
  );
}

export const VisuomotorRobotPolicies = () => {
  const [modality, setModality] = useState('state');

  const handleModalityChange = (modality: string) => {
    setModality(modality);
  }

  return (
    <Wrapper>
      <Title><p>Learning Visuomotor Robot Policies</p></Title>
      <Subtitle>
        <p>Adam Wolkowycki<br/>
        University of Southern Denmark</p>
        <p>Master's thesis supervised by Iñigo Iturrate & Ralph Brorsen</p>
      </Subtitle>

      <ButtonWrapper>
        <Link href="https://drive.google.com/file/d/1IZEmTO6ZKHK6G1fL9YIZNJsl3ob8FIG4/view?usp=drive_link" target="blank">
          <Button>Thesis</Button>
        </Link>
        <Link href="https://github.com/PsorTheDoctor/visuomotor-robot-policies-v2" target="blank">
          <Button><GitHub/>Code</Button>
        </Link>
      </ButtonWrapper>

      <Abstract>
      <p><strong>Abstract.</strong> Robot systems that can learn control policies directly from raw visual 
      input hold immense potential for various applications, ranging from
      industrial automation to assistive robotics. Traditional approaches of
      behavioral cloning, such as kinesthetic teaching, teleoperation, or manual 
      guidance with sensors on a demonstrator often require an interaction
      with human operator who is responsible for guading a robot. In contrast to
      that, recent advances in the field of deep learning offer promising paths
      for learning from visual data, thus increasing robot autonomy. This
      project aims to explore the application of modern methodologies, such
      as diffusion models, behavior transformers, and energy-based models in
      enabling robots to learn visuomotor control policies from uncalibrated
      images as an input. This study found that the best investigated methods can
      achieve approximately a 70% mean success rate on dexterous tasks,
      such as pick-and-place and insertion, while being trained solely using visual data.</p>
      </Abstract>

      <Header>Theory</Header>
      <div>
      <Column>
      <p>The thesis is focused on comparison between three state-of-the-art methods
      are capable to produce robot policies based on learning from demonstration, 
      especially in a form of visual data:</p>
      <ul>
        <li><strong>Behavior Transformer</strong></li>
        <li><strong>Implicit Behavioral Cloning</strong></li>
        <li><strong>Diffusion Policy</strong></li>
      </ul>
      </Column>
      <ColumnImg src={policies} alt="Policy representations." width="600" />
      </div>

      <Header>Toy example</Header>
      <PushtTable />
      <Errata>
      Note: To visualize the trajectory, I used custom object tracking script that introduced some additional  inertia.
      Therefore, the actual trajectiories are smoother and less chaotic than they appear.
      </Errata>

      <Header>Experiment</Header>
      <Radio>
        <LeftButton modality={modality} onClick={() => handleModalityChange('state')}>State</LeftButton>
        <MiddleButton modality={modality} onClick={() => handleModalityChange('image')}>Image</MiddleButton>
        <RightButton modality={modality} onClick={() => handleModalityChange('hybrid')}>Hybrid</RightButton>
      </Radio>

      {modality === 'state' && <StateTable />}
      {modality === 'image' && <ImageTable />}
      {modality === 'hybrid' && <HybridTable />}

      <Header>Viewpoint comparison</Header>
      <ViewpointTable />

      <Header>Results</Header>
      <Subtitle>Success rate (mean of last 60 trials)</Subtitle>
      <ScoreTable>
        <thead>
          <tr>
            <th></th>
            <th>Modality</th>
            <th>Lift</th>
            <th>Can</th>
            <th>Square</th>
            <th>ToolHang</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>miniBET</td>
            <td>State</td>
            <td><strong>0.97</strong></td>
            <td><strong>0.97</strong></td>
            <td>0.55</td>
            <td>0.17</td>
          </tr>
          <tr>
            <td>DiffusionPolicy</td>
            <td>State</td>
            <td><strong>0.97</strong></td>
            <td>0.92</td>
            <td><strong>0.67</strong></td>
            <td><strong>0.23</strong></td>
          </tr>
          <tr>
            <td>miniBET</td>
            <td>Image</td>
            <td><strong>0.82</strong></td>
            <td>0.05</td>
            <td>0.07</td>
            <td>–</td>
          </tr>
          <tr>
            <td>DiffusionPolicy</td>
            <td>Image</td>
            <td>0.7</td>
            <td><strong>0.67</strong></td>
            <td><strong>0.7</strong></td>
            <td>–</td>
          </tr>
          <tr>
            <td>miniBET</td>
            <td>Hybrid</td>
            <td><strong>0.92</strong></td>
            <td>0.1</td>
            <td>0.27</td>
            <td>–</td>
          </tr>
          <tr>
            <td>DiffusionPolicy</td>
            <td>Hybrid</td>
            <td>0.72</td>
            <td><strong>0.77</strong></td>
            <td><strong>0.6</strong></td>
            <td>–</td>
          </tr>
        </tbody>
      </ScoreTable>

      <Img src={ results } alt="robomimic results." width="900" />

      <Header>Video presentation</Header>
      <Center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/py1wtTkDmao?si=iW2cjdlv5Wvy9kAI" title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </Center>

      <Header>Credits</Header>
      <ul>
        <li>Behavior Transformer: <LinkA href="https://mahis.life/bet/" target="blank">https://mahis.life/bet/</LinkA></li>
        <li>Implicit Behavioral Cloning: <LinkA href="https://implicitbc.github.io/" target="blank">https://implicitbc.github.io/</LinkA></li>
        <li>Diffusion Policy: <LinkA href="https://diffusion-policy.cs.columbia.edu/" target="blank">https://diffusion-policy.cs.columbia.edu/</LinkA></li>
        <li>robomimic dataset: <LinkA href="https://robomimic.github.io/" target="blank">https://robomimic.github.io/</LinkA></li>
      </ul>

    </Wrapper>
  );
}

const PushtTable = () => (
  <TableSmall>
      <tr>
        <td><img src={bet_pusht_state} alt="" height="150" width="150" /></td>
        <td><img src={bet_pusht_vision} alt="" height="150" width="150" /></td>
        <td><img src={bet_pusht_hybrid} alt="" height="150" width="150" /></td>
        <td><img src={ibc_pusht_state} alt="" height="150" width="150" /></td>
      </tr>
      <tr>
        <td>miniBET state</td>
        <td>miniBET image</td>
        <td>miniBET hybrid</td>
        <td>IBC state</td>
      </tr>
      <tr>
        <td><img src={dp_pusht_state} alt="" height="150" width="150" /></td>
        <td><img src={dp_pusht_vision} alt="" height="150" width="150" /></td>
        <td><img src={dp_pusht_hybrid} alt="" height="150" width="150" /></td>
        <td><img src={ibc_pusht_hybrid} alt="" height="150" width="150" /></td>
      </tr>
      <tr>
        <td>DiffusionPolicy state</td>
        <td>DiffusionPolicy image</td>
        <td>DiffusionPolicy hybrid</td>
        <td>IBC hybrid</td>
      </tr>
  </TableSmall>
);

const StateTable = () => (
    <Table>
    <tr>
      <Vertical><span style={{margin: "-10px"}}>miniBET</span></Vertical>
      <td><iframe src={bet_lift_state} height="200" width="200" title=""></iframe></td>
      <td><iframe src={bet_can_state} height="200" width="200" title=""></iframe></td>
      <td><iframe src={bet_square_state} height="200" width="200" title=""></iframe></td>
      <td><iframe src={bet_toolhang_state} height="200" width="200" title=""></iframe></td>
    </tr>
    <tr>
      <Vertical><span style={{margin: "-40px"}}>Diffusion Policy</span></Vertical>
      <td><iframe src={dp_lift_state} height="200" width="200" title=""></iframe></td>
      <td><iframe src={dp_can_state} height="200" width="200" title=""></iframe></td>
      <td><iframe src={dp_square_state} height="200" width="200" title=""></iframe></td>
      <td><iframe src={dp_toolhang_state} height="200" width="200" title=""></iframe></td>
    </tr>
    </Table>
);

const ImageTable = () => (
    <Table>
    <tr>
      <Vertical><span style={{margin: "-10px"}}>miniBET</span></Vertical>
      <td><iframe src={bet_lift_vision} height="250" width="250" title=""></iframe></td>
      <td><iframe src={bet_can_vision} height="250" width="250" title=""></iframe></td>
      <td><iframe src={bet_square_vision} height="250" width="250" title=""></iframe></td>
    </tr>
    <tr>
      <Vertical><span style={{margin: "-40px"}}>Diffusion Policy</span></Vertical>
      <td><iframe src={dp_lift_vision} height="250" width="250" title=""></iframe></td>
      <td><iframe src={dp_can_vision} height="250" width="250" title=""></iframe></td>
      <td><iframe src={dp_square_vision} height="250" width="250" title=""></iframe></td>
    </tr>
    </Table>
);

const HybridTable = () => (
    <Table>
    <tr>
      <Vertical><span style={{margin: "-10px"}}>miniBET</span></Vertical>
      <td><iframe src={bet_lift_hybrid} height="250" width="250" title=""></iframe></td>
      <td><iframe src={bet_can_hybrid} height="250" width="250" title=""></iframe></td>
      <td><iframe src={bet_square_hybrid} height="250" width="250" title=""></iframe></td>
    </tr>
    <tr>
      <Vertical><span style={{margin: "-40px"}}>Diffusion Policy</span></Vertical>
      <td><iframe src={dp_lift_hybrid} height="250" width="250" title=""></iframe></td>
      <td><iframe src={dp_can_hybrid} height="250" width="250" title=""></iframe></td>
      <td><iframe src={dp_square_hybrid} height="250" width="250" title=""></iframe></td>
    </tr>
    </Table>
);

const ViewpointTable = () => (
    <Table>
    <tr>
      <td><iframe src={dp_can_stationary} height="250" width="250" title=""></iframe></td>
      <td><iframe src={dp_can_end_eff} height="250" width="250" title=""></iframe></td>
      <td><iframe src={dp_can_vision} height="250" width="250" title=""></iframe></td>
    </tr>
    <tr>
      <td>Stationary camera</td>
      <td>End effector camera</td>
      <td>Dual-camera setup</td>
    </tr>
    </Table>
);
