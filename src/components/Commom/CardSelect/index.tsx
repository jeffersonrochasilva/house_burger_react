// Router Dom
import { Link } from "react-router-dom";

// Style
import {
  Container,
  Description,
  TextTitle,
  TextDescription,
  Value,
  Image,
} from "./style";

interface IProps {
  item?: any;
  Ingredients?: string;
  onpress?: any;
}

const CardSelect = ({ item, Ingredients, onpress }: IProps) => {
  return (
    <Link to={"/selectItem"} onClick={() => onpress(item)}>
      <Container>
        <Description>
          <TextTitle>{item.title}</TextTitle>
          <TextDescription>{Ingredients}</TextDescription>
          <Value>R$ {item.value}</Value>
        </Description>
        <Image src={item.image} alt="texas_gril" title="hambubgueer" />
      </Container>
    </Link>
  );
};

export { CardSelect };
