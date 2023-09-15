import { styled } from "styled-components";

const Container = styled.div`
  background: linear-gradient(to right, #80002a, #a50034);
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  font-weight: 400;
  color: white;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  color: white;
  margin-left: 5px;
  margin-bottom: 15px;
`;

const ItemsBox = styled.div`
  /* background-color: red; */
  border-radius: 100px;
  width: 10px;
  height: 10px;
  padding: 3px;
  position: absolute;
  top: 10px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  font-size: 10px;
`;

export { Container, Content, Title, ItemsBox, Span };
