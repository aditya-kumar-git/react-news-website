import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, ContainerCategory } from "./styles";

export default function CategoryScreen() {
  const [catList] = useState([
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ]);

  const listRender = () => {
    return catList.map((name, index) => {
      return (
        <Link
          to={{
            pathname: "/categorynews",
            catName: name,
          }}
        >
          <ContainerCategory key={"catKey-" + index}>{name}</ContainerCategory>
        </Link>
      );
    });
  };
  return <Container>{listRender()}</Container>;
}
