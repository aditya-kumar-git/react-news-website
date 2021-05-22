import React, { useState } from "react";
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
        <ContainerCategory key={"catKey-" + index}>{name}</ContainerCategory>
      );
    });
  };
  return <Container>{listRender()}</Container>;
}
