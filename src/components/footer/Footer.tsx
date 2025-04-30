import styled from "styled-components"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Wrapper = styled.div`
  background-color: midnightblue;
  color: white;
  height: 120px;
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
  background-color: #0041c2;
  color: white;
  height: 30px;
  width: 130px;
  border: 0;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
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
      <a href="mailto: psor2.0@gmail.com">
        <Button>Contact</Button>
      </a>
      {/* <a href="https://www.buymeacoffee.com/adamwolkowycki" target="blank">
        <Button>Buy me a coffee</Button>
      </a> */}
      <SocialMedia>
        <Link href="https://www.linkedin.com/in/adam-wolkowycki-0a0570171" target="blank">
          <LinkedIn />
        </Link>
        <Link href="https://github.com/PsorTheDoctor" target="blank">
          <GitHub />
        </Link>
      </SocialMedia>
    </Container>
    Adam Wolkowycki ©2025
  </Wrapper>
);
