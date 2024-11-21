import styled from "styled-components";
import Work from "../../images/work.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  // height: calc(100vh - 130px);
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
`;

const Header = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
`;

const Column = styled.div`
  float: left;
  padding-right: 20px;
  text-align: justify;
  @media (max-width: 1000px) {
    max-width: 100%;
  }
  @media (min-width: 1000px) {
    max-width: 380px;
  }
`;

const Image = styled.div`
  float: left;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Img = styled.img`
  max-width: 100%;
`;

export const Contact = () => (
  <Wrapper>
    <Header>Contact</Header>
    <div>
      <Column>
      <p>As a person who likes to show my stuff in public
      for the last years I was receiving several requests regarding 
      showcase of my projects, mechanical design, and AI related software development.</p>
      
      <p>Feel free to contact me or reach out in the social media
      if you have any proposal that might be interesting or just want to stay in touch.
      I usually try to help as much as I can, but keeping in mind the cases when people were going to 
      overuse my kindness I am chronically allergic to "you must help me" messages
      that annoy my inbox most frequently.</p>
      <p>E-mail: <b>psor2.0@gmail.com</b></p>
      </Column>
      <Image>
        <Img src={Work} width="600px" alt="Me" />
      </Image>
    </div>
  </Wrapper>
);
