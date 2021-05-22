import React from "react";
import { Link } from "react-router-dom";
import Routes from "routes";
import { Container } from "./styles";

export default function navigation() {
  return (
    <Container>
      <Link to={Routes.Home}>
        <div>Home</div>
      </Link>
      <Link to={Routes.Category}>
        <div>Category</div>
      </Link>
    </Container>
  );
}
