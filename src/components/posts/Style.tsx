import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  padding: 10px 10px 30px 10px;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
`;

export const Subtitle = styled.p`
  text-align: left;
`;

export const Header = styled.h5`
  margin-top: 10px;
`;

export const Image = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 30px;
  max-width: 100%;
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
  background-color: #0041c2;
  color: white;
  height: 30px;
  border: 0;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 5px 5px 5px lightgray;
  &:hover {
    background-color: lightgreen;
    transition: 0.3s;
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;
