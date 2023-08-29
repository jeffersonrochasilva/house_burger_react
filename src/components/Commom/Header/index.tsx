import React from "react";
import { Link } from "react-router-dom";
// Style
import { Container, Content, Title, ItemsBox, Span } from "./style";

// Icons
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <Container>
      <Content>
        <FaBars />
        <Link
          style={{
            textDecoration: "none",
            padding: 0,
            marginTop: 15,
          }}
          to="/"
        >
          <Title>Cardapio</Title>
        </Link>
      </Content>
      <div>
        <AiOutlineShoppingCart
          style={{
            fontSize: 25,
          }}
        />
        <ItemsBox>
          <Span>2</Span>
        </ItemsBox>
      </div>
    </Container>
  );
};

export default Header;
// FaBars
