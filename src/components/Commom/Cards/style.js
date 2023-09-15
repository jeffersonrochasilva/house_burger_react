import { styled } from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 8px;
  background: #cdcdcd;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  text-decoration: none;
  margin-bottom: 20px;
  width: 300px;
  height: 150px;
`;

const Title = styled.p`
  color: black;
`;

export { Container, Link, Title };
