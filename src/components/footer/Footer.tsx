import styled from "styled-components"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Wrapper = styled.div`
  background-color: darkblue;
  color: white;
  height: 100px;
  text-align: center;
`

const SocialMedia = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  text-align: right;
`

export const Footer = () => (
  <Wrapper>
    <SocialMedia>
      <a href="https://www.linkedin.com/in/adam-wolkowycki-0a0570171" target="blank">
        <LinkedInIcon className="icon" />
      </a>
      <a href="https://github.com/PsorTheDoctor" target="blank">
        <GitHubIcon className="icon" />
      </a>
    </SocialMedia>
    Adam Wolkowycki ©2022
  </Wrapper>
);
