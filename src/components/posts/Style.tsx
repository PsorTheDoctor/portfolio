import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  margin-top: 10px;
  margin-bottom: 50px;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
`;

export const Image = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 30px;
`;

export const Img = styled.img`
  max-width: 100%;
`;

export const Video = styled.video`
  max-width: 100%;
`;

export const Iframe = styled.iframe`
  max-width: 100%;
`;

export const Button = styled.button`
  background-color: blue;
  height: 30px;
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
`;
