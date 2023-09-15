import { styled } from "styled-components";

const Container = styled.div`
  width: 250px;
  background: rgb(211, 211, 245);
  height: 150px;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 1px 0px 8px orange;
  margin-bottom: 20px;
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NumberTable = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: orange;
  color: white;
`;
const Text = styled.div`
  color: gray;
  font-weight: bolder;
`;
const SubText = styled.div`
  color: gray;
  /* font-weight: bolder; */
`;

const ButtnFooter = styled.button`
  width: 45px;
  height: 15px;
  border-style: none;
  border-radius: 4px;
  background-color: white;
  color: black;
`;

export { Container, Text, NumberTable, SubText, FooterCard, ButtnFooter };
