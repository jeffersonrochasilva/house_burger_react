import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Logos = styled.div`
  width: 200px;
  height: 60px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  margin: 10px;
`;

const BiggerLogo = styled.p`
  color: white;
  font-size: 23px;
  padding: 0;
  margin: 0;
`;

const SmallerLogo = styled.p`
  color: white;
  font-size: 10px;
  padding: 0;
  margin: 0;
`;

export { Container, Logos, BiggerLogo, SmallerLogo };
