import styled from "styled-components";

type PropsType = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Contact = (props: PropsType) => (
  <Wrapper>
    <Header><p>Contact</p></Header>
    <p>E-mail: adwol21@student.sdu.dk</p>
  </Wrapper>
);
