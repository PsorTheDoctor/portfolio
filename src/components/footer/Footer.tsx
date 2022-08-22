import styled from "styled-components"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Wrapper = styled.div`
  background-color: darkblue;
  color: white;
  height: 100px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  height: 30px;
  width: 130px;
  border: 0;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  &:hover {
    background-color: lightgreen;
    transition: 0.3s;
  }
`;

const SocialMedia = styled.div`
  text-align: right;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: lightgreen;
  }
`;

const LinkedIn = styled(LinkedInIcon)`
  transform: scale(1.5);
  margin: 15px;
`;

const GitHub = styled(GitHubIcon)`
  transform: scale(1.5);
  margin: 15px;
`;

export const Footer = () => (
  <Wrapper>
    <Container>
      <a href="mailto: adwol21@student.sdu.dk">
        <Button>Contact</Button>
      </a>
      <SocialMedia>
        <Link href="https://www.linkedin.com/in/adam-wolkowycki-0a0570171" target="blank">
          <LinkedIn />
        </Link>
        <Link href="https://github.com/PsorTheDoctor" target="blank">
          <GitHub />
        </Link>
      </SocialMedia>
    </Container>
    Adam Wolkowycki ©2022
  </Wrapper>
);
