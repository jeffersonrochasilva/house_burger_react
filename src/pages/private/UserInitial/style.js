import { styled } from "styled-components";

const Container = styled.div`
  /* background-color: red; */
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
`;

const Requests = styled.div`
  height: calc(100vh - 120px);
  width: 100%;
  /* background-color: yellow; */
  padding: 30px;
`;

const Title = styled.p`
  font-size: 28px;
  margin-left: 15px;
  font-weight: bold;
`;

export { Container, Title, Content, Requests };
