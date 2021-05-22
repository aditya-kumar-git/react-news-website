import React from "react";
import { Link } from "react-router-dom";
import { NewsContainer, NewsImage, NewsTitle } from "./styles";

export default function FirstNewsBlock(props) {
  const { title, urlToImage } = props.data;
  return (
    <Link
      to={{
        pathname: "/fullnews",
        dataProps: props.data,
      }}
    >
      <NewsContainer>
        <NewsImage style={{ backgroundImage: `url(${urlToImage})` }}>
          <NewsTitle>{title}</NewsTitle>
        </NewsImage>
      </NewsContainer>
    </Link>
  );
}
