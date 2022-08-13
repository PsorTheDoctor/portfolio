import styled from "styled-components"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Wrapper = styled.div`
  background-color: darkblue;
  height: 100px;
`

const SocialMedia = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`

export const Footer = () => (
  <Wrapper>
    <SocialMedia>
      <a href="https://www.linkedin.com/in/adam-wolkowycki-0a0570171" target="blank">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/PsorTheDoctor" target="blank">
        <GitHubIcon />
      </a>
    </SocialMedia>
  </Wrapper>
);
