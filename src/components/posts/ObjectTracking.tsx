import styled from "styled-components";
import { useState } from 'react';
import { Wrapper, Title, Subtitle, Image, Button, Iframe } from "./Style";

const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

const Radio = styled.div`
  background-color: lightgray;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
`

const LeftButton = styled.button`
  background-color: lightgray;
  color: black;
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
    background-color: blue;
    color: white;
    border-radius: 15px;
  }
`;

const MiddleButton = styled.button`
  background-color: lightgray;
  color: black;
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
    background-color: blue;
    color: white;
    border-radius: 15px;
  }
`;

const RightButton = styled.button`
  background-color: lightgray;
  color: black;
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
    background-color: blue;
    color: white;
    border-radius: 15px;
  }
`;

export const ObjectTracking = () => {
  const models = [
    "https://www.youtube.com/embed/gCiGnnDv6K0", // daylight
    "https://www.youtube.com/embed/rj-n-nWoviM", // fog
    "https://www.youtube.com/embed/Q70_PxavcRQ"  // night
  ];
  const [model, setModel] = useState(models[0]);

  return (
  <Wrapper>
    <Title>Object tracking toolkit</Title>
    <Subtitle>Follow-up of the autonomous vehicle project.</Subtitle>

    <Link href="https://stekopsa.pl/ncbr/" target="blank">
      <Button>Project Site (in Polish)</Button>
    </Link>

    <p>The purpose was to create real-time markerless object tracking system including thermovision image processing.</p>

    <Radio>
      <LeftButton onClick={() => setModel(models[0])}>Daylight</LeftButton>
      <MiddleButton onClick={() => setModel(models[1])}>Fog</MiddleButton>
      <RightButton onClick={() => setModel(models[2])}>Night</RightButton>
    </Radio>
    <Image>
      <Iframe width="560" height="315" src={model} title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
    </Image>

    <p><b>Note</b></p>
    <p>STEKOP S.A. does not authorize this post.</p>
  </Wrapper>
  );
};