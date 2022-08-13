import styled from "styled-components"

type PropsType = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

export const Contact = (props: PropsType) => (
  <Wrapper>
    <p>Contact</p>
    <p>E-mail: adwol21@student.sdu.dk</p>
  </Wrapper>
);
