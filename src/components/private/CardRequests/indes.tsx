import {
  Container,
  Text,
  NumberTable,
  SubText,
  FooterCard,
  ButtnFooter,
} from "./style";

const CardRequests = (props: { table: number }) => {
  return (
    <Container>
      <Text>mesa 7</Text>
      <SubText>fkjnkjnkj nkjnkj nkjnkjnkj nkjnkjnkjn kjnk jn...</SubText>
      <FooterCard>
        <NumberTable>{props.table}</NumberTable>
        <ButtnFooter>feito</ButtnFooter>
      </FooterCard>
    </Container>
  );
};

export { CardRequests };
