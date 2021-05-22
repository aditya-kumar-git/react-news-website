import React from "react";
import { Link } from "react-router-dom";
import {
  NewsContainer,
  NewsImage,
  NewsData,
  NewsTitle,
  SmallData,
  NewsDate,
  NewsSource,
  Divider,
} from "./styles";

export default function NewsBlock(props) {
  const { publishedAt, source, title, urlToImage } = props.data;
  return (
    <Link
      to={{
        pathname: "/fullnews",
        dataProps: props.data,
      }}
    >
      <NewsContainer>
        <NewsImage
          style={{ backgroundImage: `url(${urlToImage})` }}
        ></NewsImage>
        <NewsData>
          <NewsTitle>{title}</NewsTitle>
          <SmallData>
            <NewsDate>{publishedAt.slice(0, 10)}</NewsDate>
            <Divider>|</Divider>
            <NewsSource>{source.name}</NewsSource>
          </SmallData>
        </NewsData>
      </NewsContainer>
    </Link>
  );
}
