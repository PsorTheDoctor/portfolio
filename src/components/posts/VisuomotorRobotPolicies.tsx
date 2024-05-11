import React, { useState, ChangeEvent } from 'react';
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";

import policies from "../../images/policies.png";

import bet_pusht_state from "../../videos/thesis/pusht/mini_bet_state_tr.gif";
import bet_pusht_hybrid from "../../videos/thesis/pusht/mini_bet_hybrid_tr.gif";
import bet_pusht_vision from "../../videos/thesis/pusht/mini_bet_vision_tr.gif";
import dp_pusht_state from "../../videos/thesis/pusht/dp_state_tr.gif";
import dp_pusht_hybrid from "../../videos/thesis/pusht/dp_hybrid_tr.gif";
import dp_pusht_vision from "../../videos/thesis/pusht/dp_vision_2_tr.gif";
import ibc_pusht_state from "../../videos/thesis/pusht/ibc_hybrid_tr.gif";
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
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
  padding-top: 30px;
`;

const Subtitle = styled.span`
  text-align: center;
  font-size: 18px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
  margin: 0 auto 0 auto;
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
  margin-bottom: 10px;
  padding: 5px 20px 5px 20px;
  box-shadow: 5px 5px 5px lightgray;
  &:hover {
    background-color: lightgreen;
    transition: 0.3s;
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
  margin: 0 auto 30px auto;
`;

const Img = styled.img`
  max-width: 100%;
  border-radius: 30px;
  margin: 0 auto 30px auto;
  box-shadow: 10px 10px 10px lightgray;
`;

const Radio = styled.div`
  background-color: lightgray;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
`

const LeftButton = styled.button`
  background-color: lightgray;
  color: darkslategray;
  width: 100px;
  height: 30px;
  float: left;
  border: 0;
  border-radius: 15px 0 0 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  &:focus {
    background-color: darkslategray;
    color: white;
    border-radius: 15px;
  }
`;

const MiddleButton = styled.button`
  background-color: lightgray;
  color: darkslategray;
  width: 100px;
  height: 30px;
  float: left;
  border: 0;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;;
  padding-left: 20px;
  padding-right: 20px;
  &:focus {
    background-color: darkslategray;
    color: white;
    border-radius: 15px;
  }
`;

const RightButton = styled.button`
  background-color: lightgray;
  color: darkslategray;
  width: 100px;
  height: 30px;
  float: left;
  border: 0;
  border-radius: 0 15px 15px 0;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  &:focus {
    background-color: darkslategray;
    color: white;
    border-radius: 15px;
  }
`;

const TableSmall = styled.table`
  border-collapse: collapse;
  text-align: center;
  margin: 0 auto 30px auto;
  font-size: 12px;
`;

const Table = styled.table`
  max-width: 800px;
  border-collapse: collapse;
  text-align: center;
  margin: 0 auto 30px auto;
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
  margin: 0 auto 30px auto;
  td, th {
    min-width: 100px;
  }
  tr:nth-child(even) {
    background-color: #cfecec;
  }
`

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

const VisuomotorRobotPolicies = () => {
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
        <Button>Thesis</Button>
        <Button><GitHub/>Code</Button>
      </ButtonWrapper>

      <Abstract>
      <p><strong>Abstract.</strong> Robot systems that can learn control policies directly from raw visual 
      input hold immense potential for various applications, ranging from
      industrial automation to assistive robotics. Traditional approaches of
      imitation learning, such as kinesthetic teaching, teleoperation, or manual 
      guidance with sensors on a demonstrator often require an interaction
      with human operator who is resposible for guading a robot. In contrast to
      that, recent advances in the field of deep learning offer promising paths
      for learning from visual data, thus increasing robot autonomy. This
      project aims to explore the application of modern methodologies, such
      as diffusion models, behavior transformers, and energy-based models in
      enabling robots to learn visuomotor control policies from uncalibrated
      images as an input.</p>
      </Abstract>

      <Img src={policies} alt="Policy representations." width="600" />

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

      <Radio>
        <LeftButton onClick={() => handleModalityChange('state')}>State</LeftButton>
        <MiddleButton onClick={() => handleModalityChange('image')}>Image</MiddleButton>
        <RightButton onClick={() => handleModalityChange('hybrid')}>Hybrid</RightButton>
      </Radio>

      {modality === 'state' && <StateTable />}
      {modality === 'image' && <ImageTable />}
      {modality === 'hybrid' && <HybridTable />}

      <p>Success rate (mean of last 60 trials)</p>
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
            <td></td>
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
            <td>--</td>
          </tr>
          <tr>
            <td>DiffusionPolicy</td>
            <td></td>
            <td>0.7</td>
            <td><strong>0.67</strong></td>
            <td><strong>0.7</strong></td>
            <td>--</td>
          </tr>
          <tr>
            <td>miniBET</td>
            <td>Hybrid</td>
            <td><strong>0.92</strong></td>
            <td>0.1</td>
            <td>0.27</td>
            <td>--</td>
          </tr>
          <tr>
            <td>DiffusionPolicy</td>
            <td></td>
            <td>0.72</td>
            <td>0.77</td>
            <td>0.6</td>
            <td>--</td>
          </tr>
        </tbody>
      </ScoreTable>
    </Wrapper>
  );
}

const StateTable = () => (
  <div>
    <h4>Experiments on state data</h4>
    <Table>
    <tr>
      <Vertical>miniBET</Vertical>
      <td><iframe src={bet_lift_state} height="200" width="200" title=""></iframe></td>
      <td><iframe src={bet_can_state} height="200" width="200" title=""></iframe></td>
      <td><iframe src={bet_square_state} height="200" width="200" title=""></iframe></td>
      <td><iframe src={bet_toolhang_state} height="200" width="200" title=""></iframe></td>
    </tr>
    <tr>
      <Vertical>Diffusion Policy</Vertical>
      <td><iframe src={dp_lift_state} height="200" width="200" title=""></iframe></td>
      <td><iframe src={dp_can_state} height="200" width="200" title=""></iframe></td>
      <td><iframe src={dp_square_state} height="200" width="200" title=""></iframe></td>
      <td><iframe src={dp_toolhang_state} height="200" width="200" title=""></iframe></td>
    </tr>
    </Table>
  </div>
);

const ImageTable = () => (
  <div>
    <h4>Experiments on image data</h4>
    <Table>
    <tr>
      <Vertical>miniBET</Vertical>
      <td><iframe src={bet_lift_vision} height="250" width="250" title=""></iframe></td>
      <td><iframe src={bet_can_vision} height="250" width="250" title=""></iframe></td>
      <td><iframe src={bet_square_vision} height="250" width="250" title=""></iframe></td>
    </tr>
    <tr>
      <Vertical>Diffusion Policy</Vertical>
      <td><iframe src={dp_lift_vision} height="250" width="250" title=""></iframe></td>
      <td><iframe src={dp_can_vision} height="250" width="250" title=""></iframe></td>
      <td><iframe src={dp_square_vision} height="250" width="250" title=""></iframe></td>
    </tr>
    </Table>
  </div>
);

const HybridTable = () => (
  <div>
    <h4>Experiments on hybrid data</h4>
    <Table>
    </Table>
  </div>
);
