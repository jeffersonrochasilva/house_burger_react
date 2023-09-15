import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #80002a, #a50034);
  display: flex;
  align-items: center;
`;
const Content = styled.div`
  width: calc(100% - 250px);
  height: 100%;
  padding-right: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentLogo = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 45px;
  height: 45px;
  margin: 15px;
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export { Container, Content, ContentLogo, Text, Image };
