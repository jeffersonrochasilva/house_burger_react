import React from "react";
import { Link } from "react-router-dom";

// style
import { SmallerLogo, BiggerLogo, Container, Logos } from "./style";

const Logo = () => {
  return (
    <Link style={{ textDecoration: "none" }} to={"/"}>
      <Container>
        <Logos>
          <BiggerLogo>Templo</BiggerLogo>
          <SmallerLogo>Do Hambúrguer</SmallerLogo>
        </Logos>
      </Container>
    </Link>
  );
};

export default Logo;
