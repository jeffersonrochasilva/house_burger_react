import { Container, Text, Image, Content, ContentLogo } from "./style";

// Image
import logowhete from "../../../assets/logo-white.jpg";

// icons
import { FaBars } from "react-icons/fa";

const HeaderPrivate = () => {
  return (
    <Container>
      <ContentLogo>
        <Image src={logowhete} />
      </ContentLogo>
      <Content>
        <FaBars />
        <Text>Cardapio</Text>
      </Content>
    </Container>
  );
};

export default HeaderPrivate;
