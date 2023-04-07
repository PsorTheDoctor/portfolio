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

const Header = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Column = styled.div`
  float: left;
  max-width: 380px;
  padding-right: 20px;
  text-align: justify;
`;

const Image = styled.div`
  float: left;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Contact = () => (
  <Wrapper>
    <Header>Contact</Header>
    <div>
      <Column>
      <p>As a person who likes to show my stuff in public
      for the last years I was receiving several requests regarding 
      showcasing of my projects, mechanical design, and AI related software development.</p>
      
      <p>Feel free to contact me or reach out in the social media
      if you have any proposal that might be interesting or just want to stay in touch.
      I usually try to help as much as I can, but keeping in mind the cases when people were going to 
      overuse my kindness I'm highly allergic to "you must help me" messages
      that annoy my inbox most freqently.</p>
      <p>E-mail: adwol21@student.sdu.dk</p>
      </Column>
      <Image>
        <img src={Work} width="600px" alt="Me" />
      </Image>
    </div>
  </Wrapper>
);
