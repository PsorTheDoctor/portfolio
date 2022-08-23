import styled from "styled-components";

type PropsType = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  height: calc(100vh - 130px);
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

export const Contact = (props: PropsType) => (
  <Wrapper>
    <p><Header>Contact</Header>
    Feel free to contact me.</p>
    <p>E-mail: adwol21@student.sdu.dk</p>
  </Wrapper>
);
