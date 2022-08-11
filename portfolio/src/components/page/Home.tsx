import styled from "styled-components";

type PropsType = {};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Column = styled.div``;

export const Home = (props: PropsType) => (
  <Wrapper>
    <Column>
      <p>firstcol</p>
    </Column>

    <Column>
      <p>secondcol</p>
    </Column>
  </Wrapper>
);