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

const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: lightgreen;
  };
`

const LiIcon = styled(LinkedInIcon)`
  transform: scale(1.5);
  margin: 15px;
`

const GhIcon = styled(GitHubIcon)`
  transform: scale(1.5);
  margin: 15px;
`

export const Footer = () => (
  <Wrapper>
    <SocialMedia>
      <Link href="https://www.linkedin.com/in/adam-wolkowycki-0a0570171" target="blank">
        <LiIcon />
      </Link>
      <Link href="https://github.com/PsorTheDoctor" target="blank">
        <GhIcon />
      </Link>
    </SocialMedia>
    Adam Wolkowycki ©2022
  </Wrapper>
);
