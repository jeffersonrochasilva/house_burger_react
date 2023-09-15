import { Container, Content, Requests, Title } from "./style";

//components
import HeaderPrivate from "../../../components/private/HeaderPrivate";
import Navbar from "../../../components/Commom/Navbar.tsx";
import ComponentRequests from "./Requests/index";
const UserInitial = () => {
  return (
    <Container>
      <HeaderPrivate />
      <Content>
        <Navbar />
        <Requests>
          <Title>Pedidos</Title>
          <ComponentRequests />
        </Requests>
      </Content>
    </Container>
  );
};

export default UserInitial;
