import { styled } from "styled-components";

const Container = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #c3c3c3;
  margin: 10px;
  border-radius: 5px;
`;

const Description = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TextTitle = styled.span`
  text-align: left;
  font-weight: bolder;
`;

const TextDescription = styled.p`
  color: #c3c3c3;
  text-align: left;
  font-size: 15px;
  margin: 0;
  padding: 0;
`;

const Value = styled.p`
  color: rgb(109, 109, 240);
  text-align: left;
  font-weight: bolder;
  margin: 0;
  padding: 0;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 3px;
`;

export { Container, Description, TextTitle, TextDescription, Value, Image };
