import { styled } from "styled-components";

const Itempage = styled.div`
  width: 100%;
  min-height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div``;

const Image = styled.img`
  height: 350px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
`;

const Description = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const Textarea = styled.textarea`
  height: 100px;
  margin: 10px;
  min-width: 350px;
`;

const Button = styled.button`
  margin: 10px;
  width: 400px;
  max-width: 350px;
  height: 40px;
  border-radius: 225px;
  background: linear-gradient(to right, #80002a, #a50034);
  color: white;
  border-style: none;
  font-family: "Nunito Sans", sans-serif;
  font-weight: bold;
`;

export { Itempage, Container, Image, Description, Textarea, Button };
